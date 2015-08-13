$(document).ready(function() {
	
	//apresentar o texto da "agende visita"...
	$('.ThumbGroup').css('visibility','initial');

	//busca do formulario externo
	var url = "phone-menu-form.html";
	$.ajax({
	    url: url,
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
			Muse.Utils.initWidget('form', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu14051 */
			
			//permite a chamada do ligthbox
			Muse.Utils.initWidget('.botao', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu18716 */

			//aplicar o assunto no form
			var assunto = $("title").html();
			$("#assunto").val(assunto + " - menu");

			//aplicar o UPPER CASE
			$(".wrapped-input").css('text-transform', 'uppercase');
	    },
	    error: function() {
	        alert("erro ao buscar: " + url);
	    },
	});

	$('.botao').click(function(){
		$(".x").css('text-align','initial');
	});

});