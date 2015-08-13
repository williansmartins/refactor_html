//itens combinados com o cliente
2:00 - Análise (willians e fabiano)
2:00 - Unir arquivos php (willians)
4:00 - Externalizar conteúdo JS (willians(15%) e fabiano(85%))
4:00 - Testes

3:50 - Internacionalizar o html somente(440 frases/palavras)
0:30 - Unificar formulários (desktop ok, phone index, tablet nao sera feito)
6:30 - AJAX (Remover menu rodapé + chamadas dinâmicas)
22:20

//etapas para resolver os js's
1-add o geral como link
2-add o jquery como link
3-verificar se nao precisa ter chamada de fontes novas no geral
4-remover chamadas de scripts
5-add chamada para o rodapé (específico) no final dos js's
6-comentar o alert de falta de dependencias do muse (rodape)

//etapas para alteracao do formulario de contato do menu (desktop)
1-remover o form do início
2-add o geral-pos.js no html
3-comentar o init widget
4-add o id="agende_uma_visita"
5-add novos estilos
	<link rel="stylesheet" type="text/css" href="css/master_home.css?4191303428"/>
	<link rel="stylesheet" type="text/css" href="css/index.css?4243157305" id="pagesheet"/>

//etapas para replicacao form do footer (desktop)
1-remover o html antigo
2-add o class ".clique" no elemento "popup_element"
3-add o class ".aqui_footer" no elemento popup

//etapas para replicacao dos forms (phone)
1-remover o html's antigos (filhos de ContainerGroup)
2-add o class ".aqui" no elemento "ContainerGroup"
3-add o class ".botao" nos id=pamphletu18716	
4-add o class ".x" nos elementos ">X<"
5-comentar os pamfletus, no js do modulo
6-fazer a chamada para o alterada/phone/js/geral-pos-phone.js
	<script src="js/geral-pos-phone.js" type="text/javascript"></script>
7-add estilos
	<link rel="stylesheet" type="text/css" href="css/master_index-master.css?4252405239"/>
  	<link rel="stylesheet" type="text/css" href="css/index.css?4175413306" id="pagesheet"/>	














//forms - willians
// desktop
index
form-u14051.php - Página Home - Menu enviou u14051/
form-u15350.php - Home Form - footer enviou 

desportiva
u15689-footer   - AP Desportiva - footer envio
u12713-interior - AP Desportiva - Interior pagina envio
u15608-menu     - AP Desportiva - menu envio

modalidades
u15305
u15396

parabens
nao tem

profissional
u15789
u15973
u15909

qualidade
u15520
u15480
u15442

sistema
u15608
u16173
u15689

sobre
u15305
u15396

// phone
index
u18723
u19292
u18779

desportiva
form-u18685.php
form-u17263.php
form-u17974.php

modalidades - X
form-u18685.php
form-u17974.php

parabens
form-u18685.php
form-u17974.php

profissional
form-u18685.php
form-u17835.php
form-u17974.php

qualidade
form-u18685.php
form-u18833.php
form-u17974.php

sistema
form-u18685.php
form-u19138.php
form-u17974.php

sobre
form-u18685.php
form-u17974.php

//tablet
index
form-u22943.php
form-u23005.php

desportiva
form-u23142.php
form-u22079.php
form-u23073.php

modalidades
form-u23142.php
form-u23073.php

parabens
form-u23142.php
form-u23073.php

profissional
form-u23142.php
form-u21910.php
form-u23073.php

qualidade
form-u23142.php
form-u22593.php
form-u23073.php

sistema
form-u23142.php
form-u23378.php
form-u23073.php

sobre
form-u23142.php
form-u23073.php

//refactors js - desktop feitos
index - willians
modalidades - willians
desportiva - willians
parabens - fabiano
profissional - willians
qualidade e estilo de vida - willians
sistema de boa forma - fabiano
sobre o metodo - fabiano


//perguntas
porque modalidades tinha redirect?
porque parabens tinha redirect?
porque sobre-o-metodo tinha redirect?

porque o alta-performance-desportiva.html do tablet tinha redirect?
porque o alta-performance-profissional.html do tablet tinha redirect?
porque o boa-forma.html do tablet tinha redirect?
porque o estilo-de-vida.html do tablet tinha redirect?
porque o index.html do tablet tinha redirect?

pra que o muse_manifest.xml?
pra que o sitemap.xml?

tinham assuntos trocados - corrigi
arquivos diferentes estavam chamando o mesmo php - corrigi

os placeholders nao estavam legal, não eram place holders, eu corrigi

//porque está usando Adobe Air como use agent?
<!--HTML Widget code-->
<!-- <script type="text/javascript">
	if( navigator.userAgent.indexOf("AdobeAIR") >= 0)
		$("#u10085_iframe").replaceWith('<img width="774" height="499" style="background-color:#EEE;" src="http://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png"/>')
</script>

<script type="text/javascript">
	if( navigator.userAgent.indexOf("AdobeAIR") >= 0)
		$("#u10099_iframe").replaceWith('<img width="774" height="499" style="background-color:#EEE;" src="http://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png"/>')
</script> -->

//sobre-o-metodo.html
<!--HTML Widget code-->
<script type="text/javascript">
	if( navigator.userAgent.indexOf("AdobeAIR") >= 0)
		$("#u2697_iframe").replaceWith('<img width="774" height="495" style="background-color:#EEE;" src="http://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png"/>')
</script>

<script type="text/javascript">
	if( navigator.userAgent.indexOf("AdobeAIR") >= 0)
		$("#u2709_iframe").replaceWith('<img width="774" height="499" style="background-color:#EEE;" src="http://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png"/>')
</script>

<script type="text/javascript">
	if( navigator.userAgent.indexOf("AdobeAIR") >= 0)
		$("#u2722_iframe").replaceWith('<img width="774" height="507" style="background-color:#EEE;" src="http://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png"/>')
</script>

obs.: levei 4 horas para descobrir como resolver isso(falta aplicar as 23 outras), tinha estimado em 0:30



