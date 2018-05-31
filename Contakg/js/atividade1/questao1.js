    
               $(document).ready(function() {
                var $containerBalao = $('#balao-atividade'); 
                var $btnAvancar = $('#botao_avancar');
                var $btnVoltar = $('#botao_voltar');
                var $chkBox = $('.foodCheck')
                var $btnContinuar = $('#btn-continuar');
                var urlAtual;
                var voltar = 1;
                var avancar = 1;
                var comidaSelecionada; 
                var selecionado = false;
                var questaoAtual = 1;
                var resposta = "queijo";

                atribuirListennerBtnEdicao($chkBox);
                var url = {
                    balao1: "img/atividade_1/FalaAtividade1_1.png",
                    balao2: "img/atividade_1/FalaAtividade1_2.png",
                    balao3: "img/atividade_1/FalaAtividade1_1.png",
                    balao4: "img/atividade_1/FalaAtividade1_1.png",
                    balao5: "img/atividade_1/FalaAtividade1_1.png",
                    balao6: "img/atividade_1/FalaAtividade1_1.png",
                }
                
                function atribuirListennerBtnEdicao($chkBox) {
                 $chkBox.off('click');
                 $chkBox.each(function () {
                     $(this).attr('src','img/componentes/checkboxVazio.png');
                     $(this).click(function () {
                         var nome = $(this).attr('alimento');
                         comidaSelecionada = nome;
                         selecionado = true;
                         $(this).attr('src','img/componentes/checkboxMarcado.png');
                         atualizarCheckBox($chkBox,$(this))
                 });
                 });
                 }

                 function atualizarCheckBox($listaChk, $atual){
                     $listaChk.each(function(){
                         $(this).attr('src','img/componentes/checkboxVazio.png');
                     });
                     $atual.attr('src','img/componentes/checkboxMarcado.png');
                 }

                function getUrl(posicao) {
                    if(posicao == 1) {
                        return url.balao1;
                    } else if (posicao == 2) {
                        return url.balao2;
                    } else if (posicao == 3) {
                        return url.balao3;
                    } else if (posicao == 4) {
                        return url.balao4;
                    } else if (posicao == 5) {
                        return url.balao5;
                    } else if (posicao == 6) {
                        return url.balao6;
                    }

                }

                function modalError(){
                 $('#feedback-header').empty();
                    $('#feedback-header').append(
                     '<h3 class="col-md-12">' +
                     'Veja novamente o gráfico para ter certeza da resposta correta.' +
                     '</h3>');
                     $('#feedback-btns').empty();
                    $('#feedback-btns').append('<button type="button" class="btn btn-primary" data-dismiss="modal">Tente novamente</button>');
                }

                function modalSuccess(){
                 $('#feedback-header').empty();
                    $('#feedback-header').append(
                     '<h3 class="col-md-12">' +
                     'O queijo é o alimento mais calórico mostrado no gráfico. Dessa forma, a altura da coluna relacionada ao queijo é maior do que todas as outras.' +
                     '</h3>');
                     $('#feedback-btns').empty();
                     $('#feedback-btns').append('<a id="btn-continuar" href="atividade1Grafico2.html" class="btn btn-success">Continuar</a>')
                }

                function gerarHtml(url) {
                    return '<img src="'+url+'" style="max-width: 500px;">';
                }
                

                $btnAvancar.click(function(){
                 if(comidaSelecionada === resposta) {
                     modalSuccess();
                     $('#error_modal').modal({show: true});
                     questaoAtual++;
                 } else {
                     console.log("ERRROU");
                     modalError();
                     $('#error_modal').modal({show: true});
                 }
                });

                $btnVoltar.click(function(){
                    history.go(-1);
                });
            });

      var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
 type: 'horizontalBar',
 data: {
     labels: ["Banana", "Suco de laranja", "Cuscuz", "Pão","Queijo"],
     datasets: [{
         label: 'Calorias',
         data: [89, 45, 142, 265, 299],
         backgroundColor: [
     'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(0, 255, 44, 0.9)',
             'rgba(255, 111, 0, 0.9)'
             
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(0, 255, 44, 0.9)',
             'rgba(255, 111, 0, 0.9)'
         ],
         borderWidth: 1
     }]
 },
 options: {
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }],
     }, title: {
            display: true,
            text: 'Calorias dos alimentos',
            position: 'bottom'
    }, responsive: true,
 maintainAspectRatio: false
 }
});
