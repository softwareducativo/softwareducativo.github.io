    
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
 $('#botao_voltar').click(function(){
                    history.go(-1);
                });

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
       'Observe atentamente os valores e o gráfico. Lembre-se que o gráfico deve representar exatamente os valores dados na votação.' +
       '</h3>');
   $('#feedback-btns').empty();
   $('#feedback-btns').append('<a type="button" class="btn btn-primary" data-dismiss="modal">Tente novamente</a>');
   refri = 0;
   biscoito = 0;
   iogurte = 0;
   maca = 0;
   pave = 0;
   $("#valor_refri").html(Math.floor(Math.random() * (10 - 1)) + 1);
   $("#valor_pave").html(Math.floor(Math.random() * (10 - 1)) + 1);
   $("#valor_biscoito").html(Math.floor(Math.random() * (10 - 1)) + 1);
   $("#valor_iog").html(Math.floor(Math.random() * (10 - 1)) + 1);
   $("#valor_maca").html(Math.floor(Math.random() * (10 - 1)) + 1);
   drawChart();
}

function modalSuccess(){
   $('#feedback-header').empty();
   $('#feedback-header').append(
       '<h3 class="col-md-12">' +
       'Você teve uma boa percepção dos valores e conseguiu montar o gráfico corretamente.' +
       '</h3>');
   $('#feedback-btns').empty();
   $('#feedback-btns').append('<a id="btn-continuar" href="pagina3.html" class="btn btn-success">Continuar</a>')
}

function gerarHtml(url) {
    return '<img src="'+url+'" style="max-width: 500px;">';
}


$btnAvancar.click(function(){
  if($("#valor_refri").text() == refri && $("#valor_pave").text() == pave && $("#valor_biscoito").text() == biscoito && $("#valor_iog").text() == iogurte && $("#valor_maca").text() == maca){
        modalSuccess();
        $('#error_modal').modal({show: true});
      }else{
        modalError();
        $('#error_modal').modal({show: true});
      }
});
});