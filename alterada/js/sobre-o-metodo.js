document.write('\x3Cscript src="' + (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//webfonts.creativecloud.com/lato:n9,n3,n4,n7,i4:all;open-sans:n8,n6:all;dosis:n5:all;league-gothic:n4:all;source-sans-pro:n3,n4:all;hammersmith-one:n4:all;josefin-slab:n3:all;yellowtail:n4:all.js" type="text/javascript">\x3C/script>');

$(document).ready(function() { 
	try {
		(function(){var a={},b=function(a){if(a.match(/^rgb/))return a=a.replace(/\s+/g,"").match(/([\d\,]+)/gi)[0].split(","),(parseInt(a[0])<<16)+(parseInt(a[1])<<8)+parseInt(a[2]);if(a.match(/^\#/))return parseInt(a.substr(1),16);return 0};(function(){$('link[type="text/css"]').each(function(){var b=($(this).attr("href")||"").match(/\/?css\/([\w\-]+\.css)\?(\d+)/);b&&b[1]&&b[2]&&(a[b[1]]=b[2])})})();(function(){$("body").append('<div class="version" style="display:none; width:1px; height:1px;"></div>');
		for(var c=$(".version"),d=0;d<Muse.assets.required.length;){var f=Muse.assets.required[d],g=f.match(/([\w\-\.]+)\.(\w+)$/),k=g&&g[1]?g[1]:null,g=g&&g[2]?g[2]:null;switch(g.toLowerCase()){case "css":k=k.replace(/\W/gi,"_").replace(/^([^a-z])/gi,"_$1");c.addClass(k);var g=b(c.css("color")),h=b(c.css("background-color"));g!=0||h!=0?(Muse.assets.required.splice(d,1),"undefined"!=typeof a[f]&&(g!=a[f]>>>24||h!=(a[f]&16777215))&&Muse.assets.outOfDate.push(f)):d++;c.removeClass(k);break;case "js":k.match(/^jquery-[\d\.]+/gi)&&
		typeof $!="undefined"?Muse.assets.required.splice(d,1):d++;break;default:throw Error("Unsupported file type: "+g);}}c.remove();if(Muse.assets.outOfDate.length||Muse.assets.required.length)c="Some files on the server may be missing or incorrect. Clear browser cache and try again. If the problem persists please contact website author.",(d=location&&location.search&&location.search.match&&location.search.match(/muse_debug/gi))&&Muse.assets.outOfDate.length&&(c+="\nOut of date: "+Muse.assets.outOfDate.join(",")),d&&Muse.assets.required.length&&(c+="\nMissing: "+Muse.assets.required.join(","))})()})();
		/* body */
		Muse.Utils.transformMarkupToFixBrowserProblemsPreInit();/* body */
		Muse.Utils.prepHyperlinks(true);/* body */
		$('#u3287').registerBackgroundPositionScrollEffect([{"in":[-Infinity,1000.8],"speed":[0,0.4]},{"in":[1000.8,Infinity],"speed":[0,0.5]}]);/* scroll effect */
		Muse.Utils.initWidget('.MenuBar', function(elem) { return $(elem).museMenu(); });/* unifiedNavBar */
		Muse.Utils.initWidget('#widgetu15305', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu15305 */
		Muse.Utils.initWidget('#pamphletu15296', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'loose',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu15296 */
		$('#u2596').registerBackgroundPositionScrollEffect([{"in":[-Infinity,5],"speed":[0,0.2]},{"in":[5,Infinity],"speed":[0,0.2]}]);/* scroll effect */
		Muse.Utils.resizeHeight()/* resize height */
		$('#u2775').registerPositionScrollEffect([{"in":[-Infinity,541.1],"speed":[1.8,1]},{"in":[541.1,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2769').registerPositionScrollEffect([{"in":[-Infinity,541.1],"speed":[-1.8,1]},{"in":[541.1,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u3371').registerPositionScrollEffect([{"in":[-Infinity,541],"speed":[0,1.3]},{"in":[541,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u3060-4').registerPositionScrollEffect([{"in":[-Infinity,1383.2],"speed":[0,1]},{"in":[1383.2,Infinity],"speed":[0,1.2]}]);/* scroll effect */
		$('#u3069').registerPositionScrollEffect([{"in":[-Infinity,1406.5],"speed":[0,2]},{"in":[1406.5,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u3070').registerPositionScrollEffect([{"in":[-Infinity,1398.1],"speed":[0,1.5]},{"in":[1398.1,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u3071').registerPositionScrollEffect([{"in":[-Infinity,1398.1],"speed":[0,2]},{"in":[1398.1,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u3072').registerPositionScrollEffect([{"in":[-Infinity,1398.1],"speed":[0,1.5]},{"in":[1398.1,Infinity],"speed":[0,1]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu2690', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu2690 */
		$('#u2688').registerPositionScrollEffect([{"in":[-Infinity,1869.95],"speed":[1.3,1]},{"in":[1869.95,Infinity],"speed":[0,1]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu2704', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu2704 */
		$('#u2703').registerPositionScrollEffect([{"in":[-Infinity,1867.95],"speed":[0,1.5]},{"in":[1867.95,Infinity],"speed":[0,1]}]);/* scroll effect */
		Muse.Utils.initWidget('#pamphletu2719', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'lightbox',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu2719 */
		$('#u2718').registerPositionScrollEffect([{"in":[-Infinity,1867.95],"speed":[-2,1]},{"in":[1867.95,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2736').registerPositionScrollEffect([{"in":[-Infinity,2441.75],"speed":[0.5,1]},{"in":[2441.75,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2735').registerPositionScrollEffect([{"in":[-Infinity,2441.75],"speed":[0.7,1]},{"in":[2441.75,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2742').registerPositionScrollEffect([{"in":[-Infinity,2441.75],"speed":[0.9,1]},{"in":[2441.75,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2739').registerPositionScrollEffect([{"in":[-Infinity,2441.75],"speed":[1.2,1]},{"in":[2441.75,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2737').registerPositionScrollEffect([{"in":[-Infinity,2441.75],"speed":[1.3,1]},{"in":[2441.75,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2740').registerPositionScrollEffect([{"in":[-Infinity,2441.75],"speed":[1.5,1]},{"in":[2441.75,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2743').registerPositionScrollEffect([{"in":[-Infinity,2441.75],"speed":[1.9,1]},{"in":[2441.75,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2744').registerPositionScrollEffect([{"in":[-Infinity,2441.75],"speed":[2,1]},{"in":[2441.75,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2738').registerPositionScrollEffect([{"in":[-Infinity,2441.75],"speed":[2.2,1]},{"in":[2441.75,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2741').registerPositionScrollEffect([{"in":[-Infinity,2441.75],"speed":[2.4,1]},{"in":[2441.75,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u2590').registerBackgroundPositionScrollEffect([{"in":[-Infinity,3604.4],"speed":[0,0.2]},{"in":[3604.4,Infinity],"speed":[0,0.2]}]);/* scroll effect */
		Muse.Utils.initWidget('#slideshowu2608', function(elem) { $(elem).data('widget', new WebPro.Widget.ContentSlideShow(elem, {autoPlay:false,displayInterval:3000,slideLinkStopsSlideShow:false,transitionStyle:'fading',lightboxEnabled_runtime:true,shuffle:false,transitionDuration:500,enableSwipe:true,elastic:'off',resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false})); });/* #slideshowu2608 */
		$('#u5480').registerPositionScrollEffect([{"in":[-Infinity,5152.68],"speed":[0,2]},{"in":[5152.68,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u5485').registerPositionScrollEffect([{"in":[-Infinity,5144.28],"speed":[0,1.5]},{"in":[5144.28,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u5490').registerPositionScrollEffect([{"in":[-Infinity,5144.28],"speed":[0,2]},{"in":[5144.28,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u5495').registerPositionScrollEffect([{"in":[-Infinity,5144.28],"speed":[0,1.5]},{"in":[5144.28,Infinity],"speed":[0,1]}]);/* scroll effect */
		Muse.Utils.initWidget('#widgetu15396', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu15396 */
		Muse.Utils.initWidget('#pamphletu15386', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'loose',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu15386 */
		Muse.Utils.fullPage('#page');/* 100% height page */
		Muse.Utils.showWidgetsWhenReady();/* body */
		Muse.Utils.transformMarkupToFixBrowserProblems();/* body */
	} catch(e) { 
		if (e && 'function' == typeof e.notify) e.notify(); else Muse.Assert.fail('Error calling selector function:' + e); 
	}
});