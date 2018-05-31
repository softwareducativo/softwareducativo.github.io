    
               $(document).ready(function() {
                var $containerBalao = $('#balao-atividade'); 
                var $btnAvancar = $('#botao_avancar');
                var $chkBox = $('.foodCheck')
                var $btnContinuar = $('#btn-continuar');
                var urlAtual;
                var voltar = 1;
                var avancar = 1;
                var comidaSelecionada; 
                var selecionado = false;
                var questaoAtual = 1;
                var resposta = "";



                     google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);




      function drawChart() {

        var variavel_bebida = Math.floor(Math.random() * (50 - 1)) + 1;
        var variavel_principal = Math.floor(Math.random() * (50 - 1)) + 1;
        var variavel_sobremesa = Math.floor(Math.random() * (50 - 1)) + 1;

        var maior = Math.max(variavel_sobremesa, variavel_bebida, variavel_principal);

        switch(maior){
            case variavel_bebida:
                    resposta = "bebida";
                break;
            case variavel_principal:
            resposta = "principal";
                    break;
            case variavel_sobremesa:
            resposta = "sobremesa";
                    break;
            default:
                    break;
        }
      
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Bebida',     variavel_bebida], // DE 1 A 50
          ['Principal',  variavel_principal],// DE 1 A 50
          ['Sobremesa',  variavel_sobremesa]// DE 1 A 50
        ]);

        var options = {
          title: 'Votação dos alunos'
        };

        var chart = new google.visualization.PieChart(document.getElementById('myChart'));

        chart.draw(data, options);
      }






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
                 $('#botao_voltar').click(function(){
                    history.go(-1);
                });

                function modalError(){
                 $('#feedback-header').empty();
                    $('#feedback-header').append(
                     '<h3 class="col-md-12">' +
                     'Observe o tamanho de cada fatia no gráfico pizza, note que cada tamanho representa um valor, quanto maior o valor maior será a fatia. Desta forma, reflita e responda a questão corretamente!' +
                     '</h3>');
                     $('#feedback-btns').empty();
                    $('#feedback-btns').append('<button type="button" class="btn btn-primary" data-dismiss="modal">Tente novamente</button>');
                }

                function modalSuccess(){
                 $('#feedback-header').empty();
                    $('#feedback-header').append(
                     '<h3 class="col-md-12">' +
                     'Um gráfico é uma figura que apresenta valores gerais sobre diversas coisas. Sua resposta mostrou que você entendeu bem sobre gráficos. Parabéns!' +
                     '</h3>');
                     $('#feedback-btns').empty();
                     $('#feedback-btns').append('<a id="btn-continuar" href="pagina3.html" class="btn btn-success">Continuar</a>')
                }

                function gerarHtml(url) {
                    return '<img src="'+url+'" style="max-width: 500px;">';
                }
                

                $btnAvancar.click(function(){
                 if(comidaSelecionada == resposta) {
                     modalSuccess();
                     $('#error_modal').modal({show: true});
                     questaoAtual++;
                 } else {
                     console.log("ERRROU");
                     modalError();
                     $('#error_modal').modal({show: true});
                 }
                });
            });
