$(document).ready(function() { 

	//Muse.Redirect.redirect('desktop', 'tablet/index.html', 'phone/index.html');

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
			$alvo.children().hide();

			//aplica a validação dos campos, via muse
			Muse.Utils.initWidget('#widgetu14051', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu14051 */

			//aplicar o assunto no form
			var assunto = $("title").html();
			$("#assunto").val(assunto + " - menu");

			//aplicar o UPPER CASE
			$(".wrapped-input, .captcha input").css('text-transform', 'uppercase');

			//melhorando estilos
			$(".captcha input").parent().css('text-indent', '0px');

			//definir valores para apoio em desenvolvimento
			// $("input[name = 'custom_nome']").val("Willians martins");
			// $("input[name = 'custom_email']").val("meu@email.com");
			// $("input[name = 'custom_telefone']").val("4141-9988");
			// $("textarea[name = 'custom_cidade']").val("Jandira");
			// $("textarea[name = 'custom_bairro']").val("Sagrado");
	    },
	    error: function() {
	        alert("erro ao buscar " + "menu-form.html");
	    },
	});

   //acao do menu, agendar uma visita
   $("#agende_uma_visita").mouseenter(function(){
       //definir elementos
       var $container = $('.aqui').find(".Container");
       var $containerGroup = $('.aqui').find(".ContainerGroup");

       //apresenta o form
       $container.css('visibility', 'initial');
       $containerGroup.show();
       
       //aplica o leave para fechar o form
       $('.aqui').children().children().mouseleave(function(){
           $(this).css('visibility', 'hidden');
           $containerGroup.hide();
       });

   });

	//busca do formulario externo - footer
	$.ajax({
	    url: "footer-form.html",
	    type: "POST",
	    success: function(result) {
	        //guardar o conteudo do html
	        var form = result;
			//carrega menu-form.html dentro de aqui
			var $alvo = $('.aqui_footer');
			$alvo.html("");
			$alvo.append( form );
			$alvo.children().hide();

			//aplica a validação dos campos, via muse
			Muse.Utils.initWidget('#widgetu15350', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu14051 */

			//aplicar o assunto no form
			var assunto = $("title").html();
			$("#assunto").val(assunto + " - menu");

			//add mouseover no botao fechar
			$alvo.find('.fechar').css('cursos', 'pointer');
			$alvo.find('.fechar').css("background-image", 'images/fechar.png');

			//aplicar o UPPER CASE
			$(".wrapped-input").css('text-transform', 'uppercase');
	    },
	    error: function() {
	        alert("erro ao buscar " + "footer-form.html");
	        debugger;
	    },
	});

	//acao do menu, agendar uma visita
	$(".clique").click(function(){
		//definir elementos
		var $container = $('.aqui_footer').find(".Container");
		var $containerGroup = $('.aqui_footer').find(".ContainerGroup");

		//apresenta o form
		$container.css('visibility', 'initial');
		$containerGroup.show();
	    
	    //aplica o leave para fechar o form
	    $container.find('.fechar').click(function(){
			$containerGroup.css('visibility', 'hidden');
			$containerGroup.hide();
			// console.log($containerGroup.id);
		});

	});

});