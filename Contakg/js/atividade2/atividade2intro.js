$(document).ready(function() {
  console.log("Testando script")
  var $containerBalao = $('#balao-atividade'); 
  var $btnAvancar = $('#botao_avancar');
  var urlAtual;
  var voltar = 1;
  var avancar = 1;
var pathAtual = '/home/samuel/Documentos/Contaquilo/atividade3.html';
var arrayPath =pathAtual.split("/");
arrayPath.pop();
arrayPath.shift();
var path = "";
arrayPath.forEach(function(dado){
path =path+"/"+dado;
});
console.log(path);

  $('#balao-atividade').append(
  '<img src="img/atividade_2/FalaAtividade2_1.png" style="max-width: 500px;">');

  var url = {
      balao1: "img/atividade_2/FalaAtividade2_1.png",
      balao2: "img/atividade_2/FalaAtividade2_2.png",
      balao3: "img/atividade_2/FalaAtividade2_3.png",
      balao4: "img/atividade_2/FalaAtividade2_4.png",
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

if(avancar == 3) {//Ajustar aqui para adicionar mais balões e direcionar corretamente para a atividade
window.location.href = "atividade2qq1.html";
} else {
     $containerBalao.append(gerarHtml(urlAtual));
}   
  });
});
