var lightTheme = "css/light.css";
var darkTheme = "css/dark.css";

$(".theme-button").ready(function() {
  "use strict";

  var link = document.getElementById("theme-link");

  if(sessionStorage.getItem('theme') == "light")
  {
    $(".theme-button").find("img").attr("src","icons/light.webp");
    $(link).attr('href', lightTheme);
  }
  else
  {
    $(".theme-button").find("img").attr("src","icons/dark.webp");
    $(link).attr('href', darkTheme);
  }

});

$(document).ready(function() {
  "use strict";

  var btn = $(".theme-button");
  var link = document.getElementById("theme-link");

  $(btn).click(function(){ ChangeTheme(); });

  function ChangeTheme()
  {
    if(sessionStorage.getItem('theme') == "light")
    {
      $(btn).find("img").attr("src","icons/dark.webp");
      sessionStorage.setItem('theme', "dark");
      $(link).attr('href', darkTheme);
    }
    else
    {
      $(btn).find("img").attr("src","icons/light.webp");
      sessionStorage.setItem('theme', "light");
      $(link).attr('href', lightTheme);
    }
  }

});

function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        if(name == cookiePair[0].trim()) {
          return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
  }