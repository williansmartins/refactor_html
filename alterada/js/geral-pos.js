$(document).ready(function() { 

	//busca do formulario externo
	$.ajax({
	    url: "menu-form.html",
	    type: "POST",
	    success: function(result) {
	        //guardar o conteudo do html
	        var form = result;
			//carrega menu-form.html dentro de aqui
			var $alvo = $('.aqui');
			$alvo.html("");
			$alvo.append( form );

			//aplica a validação dos campos, via muse
			Muse.Utils.initWidget('#widgetu14051', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu14051 */

			//aplicar o assunto no form
			var assunto = $("title").html();
			$("#assunto").val(assunto + " - menu");
	    },
	    error: function() {
	        alert("erro ao buscar");
	    },
	})

	//acao do menu, agendar uma visita
	$("#agende_uma_visita").mouseenter(function(){
		//definir elementos
		var $container = $('.aqui').find(".Container");

		//apresenta o form
		$container.css('visibility', 'initial');
	    
	    //aplica o leave para fechar o form
	    $('.aqui').children().children().mouseleave(function(){
			$(this).css('visibility', 'hidden');
		});

	});

});