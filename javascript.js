  //hamburger menu slider
  
  $(document).ready(function() {
    
    $(".menu-trigger").click(function() {
      
      $(".menu").slideToggle(400, function() {
        
        $(this).toggleClass("nav-expanded").css('display', '');
        
      });
      
    });
    
  });
  
 
 
 // INLOGGEN ROOSTER
 
 function controleer() {
    var invoer = document.getElementById("invoer").value;
        if (invoer == "admin") {
            setCookie("user", invoer, 10);
           window.location.assign("lesrooster.html");
        } else {
            document.getElementById("foutmelding").innerHTML = "Voer alstublieft geldige gegevens in!"
        }
}

function setCookie(gebruikersnaam, invoer, aantalDagen){
  var d = new Date();
  d.setTime(d.getTime() + (aantalDagen *24* 60* 60* 1000));
  var expires = "expires="+d.toUTCString();

  document.cookie = gebruikersnaam + "=" + invoer + "; " + expires;
  }

  function getCookie(gebruikersnaam) {
      var name = gebruikersnaam + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }


function checkCookie(gebruikersnaam) {
   
var invoer = getCookie(gebruikersnaam);
  if (invoer != "") {        
  	document.getElementById("naam").innerHTML = "Je bent succesvol ingelogd," + " "+ invoer;
  }
}

function deleteCookie(gebruikersnaam){
  document.cookie = gebruikersnaam +  "=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
  window.location= "inloggen.html";
}