var cookiePopupTitle = "🍪 Pliki Cookies"; 
var cookiePopupDesc = "Ta strona korzysta z plików cookies aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.<br>"; 
var cookiePopupLink = '<a href="https://wszystkoociasteczkach.pl/po-co-sa-ciasteczka/" target="_blank">Więcej informacji</a>'; 
var cookiePopupButton = "Rozumiem"; 

function pureFadeIn(elem, display){
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};
function pureFadeOut(elem){
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function cookiePopupBox() {
  if (!getCookie('cookiePopupDismiss')) {
    document.body.innerHTML += '<div class="cookiePopupBoxContainer" id="cookiePopupBoxContainer"><div class="cookieTitle"><p>' + cookiePopupTitle + '</p></div><div class="cookieDesc"><p>' + cookiePopupDesc + ' ' + cookiePopupLink + '</p></div><div class="cookieButton"><btn onClick="cookiePopupDismiss();" href="#">' + cookiePopupButton + '</btn></div></div>';
	pureFadeIn("cookiePopupBoxContainer");
  }
}

function cookiePopupDismiss() {
  setCookie('cookiePopupDismiss','1',7);
  pureFadeOut("cookiePopupBoxContainer");
}

window.onload = function() { cookiePopupBox(); };
