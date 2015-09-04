/*------------------------------
 * Copyright 2015 Willians Martins
 * http://www.williansmartins.com
 *
 * 
------------------------------*/

$(document).ready(function() {

	// Iniciando a lib i18n
	i18n.init({
		fallbackLng: 'en-US' //fallback quando não definir linguagem
		,debug: true //debug do plugin
		,fixLng: true //preserva o cookie quando a linguagem for definida
		,load: 'current' //define a forma correta de declarar linguagens
	},

	function(translation) {
		$('[data-i18n]').i18n();
		// var appName = translation('app.name');
	});



	// espanhol
	$('#btn-es').on('click', function() {
		i18n.setLng('es', {fixLng: true}, function(translation){
		  	location.reload();
		  	$('[data-i18n]').i18n();
		});
	});

	// inglês
	$('#btn-en').on('click', function() {
		i18n.setLng('en-US', {fixLng: true}, function(translation){
		  	location.reload();
		  	$('[data-i18n]').i18n();
		});
	});

	// português
	$('#btn-pt').on('click', function() {
		i18n.setLng('pt-BR', {fixLng: true}, function(translation){
		  	location.reload();
		  	$('[data-i18n]').i18n();
		});
	});
});