$(document).ready(function () {
	$("#iniciar_img").mouseover(function () {
		$("#iniciar_img").attr("src","img/botoes/iniciar-hover.png");
	});
	$("#iniciar_img").mouseout(function () {
		$("#iniciar_img").attr("src","img/botoes/iniciar.png");
	});

	$("#creditos_img").mouseover(function () {
		$("#creditos_img").attr("src","img/botoes/creditos-hover.png");
	});
	$("#creditos_img").mouseout(function () {
		$("#creditos_img").attr("src","img/botoes/creditos.png");
	});

	$("#creditos_img").click(function () {
		$("#botao_aciona_modal_creditos").trigger("click");
	});	

	//Aqui seria pra fazer o clique na imagem Avançar realizar um clique no botão
	$("#botao_avancar1").click(function () {
		$("#botao1").trigger("click");
	});	


	$("#botaoajuda").click(function () {
		$("#botao_aciona_modal_ajuda").trigger("click");
	});	
	
	$("button").click(function(){
		playClick();		
	});
	
	
	playTheme();

});

function playTheme() {
	var pathAudio = "sounds/theme.wav";	
	var audio = new Audio(pathAudio);
	audio.loop = true;
	audio.play();
}

function playClick() {
	var pathAudio = "sounds/click.wav";
	var audio = new Audio(pathAudio);
	audio.play();
}