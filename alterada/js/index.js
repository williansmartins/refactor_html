$(document).ready(function() { 
	try {
		(function(){var a={},b=function(a){if(a.match(/^rgb/))return a=a.replace(/\s+/g,"").match(/([\d\,]+)/gi)[0].split(","),(parseInt(a[0])<<16)+(parseInt(a[1])<<8)+parseInt(a[2]);if(a.match(/^\#/))return parseInt(a.substr(1),16);return 0};(function(){$('link[type="text/css"]').each(function(){var b=($(this).attr("href")||"").match(/\/?css\/([\w\-]+\.css)\?(\d+)/);b&&b[1]&&b[2]&&(a[b[1]]=b[2])})})();(function(){$("body").append('<div class="version" style="display:none; width:1px; height:1px;"></div>');
		for(var c=$(".version"),d=0;d<Muse.assets.required.length;){var f=Muse.assets.required[d],g=f.match(/([\w\-\.]+)\.(\w+)$/),k=g&&g[1]?g[1]:null,g=g&&g[2]?g[2]:null;switch(g.toLowerCase()){case "css":k=k.replace(/\W/gi,"_").replace(/^([^a-z])/gi,"_$1");c.addClass(k);var g=b(c.css("color")),h=b(c.css("background-color"));g!=0||h!=0?(Muse.assets.required.splice(d,1),"undefined"!=typeof a[f]&&(g!=a[f]>>>24||h!=(a[f]&16777215))&&Muse.assets.outOfDate.push(f)):d++;c.removeClass(k);break;case "js":k.match(/^jquery-[\d\.]+/gi)&&
		typeof $!="undefined"?Muse.assets.required.splice(d,1):d++;break;default:throw Error("Unsupported file type: "+g);}}c.remove();if(Muse.assets.outOfDate.length||Muse.assets.required.length)c="Some files on the server may be missing or incorrect. Clear browser cache and try again. If the problem persists please contact website author.",(d=location&&location.search&&location.search.match&&location.search.match(/muse_debug/gi))&&Muse.assets.outOfDate.length&&(c+="\nOut of date: "+Muse.assets.outOfDate.join(",")),d&&Muse.assets.required.length&&(c+="\nMissing: "+Muse.assets.required.join(","))})()})();
		/* body */
		Muse.Utils.transformMarkupToFixBrowserProblemsPreInit();/* body */
		Muse.Utils.prepHyperlinks(true);/* body */
		$('#u14014').registerBackgroundPositionScrollEffect([{"in":[-Infinity,1000.8],"speed":[0,0.4]},{"in":[1000.8,Infinity],"speed":[0,0.5]}]);/* scroll effect */
		Muse.Utils.initWidget('.MenuBar', function(elem) { return $(elem).museMenu(); });/* unifiedNavBar */
		Muse.Utils.initWidget('#widgetu14051', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu14051 */
		Muse.Utils.initWidget('#pamphletu14037', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'loose',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu14037 */
		Muse.Utils.initWidget('#slideshowu18451', function(elem) { $(elem).data('widget', new WebPro.Widget.ContentSlideShow(elem, {heroFitting:'fillFrameProportionally',autoPlay:true,displayInterval:4500,slideLinkStopsSlideShow:false,transitionStyle:'fading',lightboxEnabled_runtime:false,shuffle:false,transitionDuration:900,enableSwipe:true,elastic:'fullWidth',resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false})); });/* #slideshowu18451 */
		$('#u18663').registerBackgroundPositionScrollEffect([{"in":[-Infinity,608.8],"speed":[0,0]},{"in":[608.8,Infinity],"speed":[0,0]}]);/* scroll effect */
		Muse.Utils.resizeHeight()/* resize height */
		$('#u18655').registerPositionScrollEffect([{"in":[-Infinity,488],"speed":[1,1.5]},{"in":[488,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u18656').registerPositionScrollEffect([{"in":[-Infinity,490],"speed":[-1,1.5]},{"in":[490,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u18654').registerPositionScrollEffect([{"in":[-Infinity,489],"speed":[1,1.5]},{"in":[489,Infinity],"speed":[0,1]}]);/* scroll effect */
		$('#u18653').registerPositionScrollEffect([{"in":[-Infinity,489],"speed":[-1,1.5]},{"in":[489,Infinity],"speed":[0,1]}]);/* scroll effect */
		Muse.Utils.initWidget('#widgetu15350', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu15350 */
		Muse.Utils.initWidget('#pamphletu15340', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'loose',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:true,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false,autoActivate_runtime:false}); });/* #pamphletu15340 */
		Muse.Utils.fullPage('#page');/* 100% height page */
		Muse.Utils.showWidgetsWhenReady();/* body */
		Muse.Utils.transformMarkupToFixBrowserProblems();/* body */
	} catch(e) { if (e && 'function' == typeof e.notify) e.notify(); else Muse.Assert.fail('Error calling selector function:' + e); }
});