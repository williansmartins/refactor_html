// dependencias do muse com 11 itens
if(typeof Muse == "undefined") window.Muse = {}; window.Muse.assets = {"required" : [ "jquery-1.8.3.min.js", "museutils.js", "webpro.js", "musewpslideshow.js", "jquery.museoverlay.js", "touchswipe.js", "jquery.watch.js", "jquery.musemenu.js", "jquery.musepolyfill.bgsize.js", "jquery.scrolleffects.js", "museredirect.js" ], "outOfDate" : []};

// sei la o que é isso
document.documentElement.className += ' js';
var __adobewebfontsappname__ = "muse";

// redirecionamento por dispositivos
Muse.Redirect.redirect('desktop', 'tablet/index.html', 'phone/index.html');