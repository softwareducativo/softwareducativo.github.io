$(document).ready(function() {
  console.log("Testando script")
  var $containerBalao = $('#balao-atividade'); 
  var $btnAvancar = $('#botao_avancar');
  var $btnVoltar = $('#botao_voltar');
  var urlAtual;
  var voltar = 1;
  var avancar = 1;
var pathAtual = '/home/samuel/Documentos/Contaquilo/atividade1.html';
var arrayPath =pathAtual.split("/");
arrayPath.pop();
arrayPath.shift();
var path = "";
arrayPath.forEach(function(dado){
path =path+"/"+dado;
});
console.log(path);

  $('#balao-atividade').append(
  '<img src="img/atividade_1/FalaAtividade1_1.png" style="max-width: 500px;">');

  var url = {
      balao1: "img/atividade_1/FalaAtividade1_1.png",
      balao2: "img/atividade_1/FalaAtividade1_2.png",
      balao3: "img/atividade_1/FalaAtividade1_1.png",
      balao4: "img/atividade_1/FalaAtividade1_1.png",
      balao5: "img/atividade_1/FalaAtividade1_1.png",
      balao6: "img/atividade_1/FalaAtividade1_1.png",
  }

  $('#botao_voltar').click(function(){
                    history.go(-1);
                });

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

  function gerarHtml(url) {
      return '<img src="'+url+'" style="max-width: 500px;">';
  }
  

  $btnAvancar.click(function(){
   $containerBalao.empty();
   avancar++;
   voltar = avancar -1;
   urlAtual = getUrl(avancar);
if(avancar == 3) {
window.location.href = "atividade1Grafico1.html";
} else {
     $containerBalao.append(gerarHtml(urlAtual));
}   
  });

  $btnVoltar.click(function(){
                    history.go(-1);
                });
});
