function Request(strName)
{
  var strHref = window.document.location.href;
  var intPos = strHref.indexOf("?");
  var strRight = strHref.substr(intPos + 1);
  
  var arrTmp = strRight.split("&");
  for (var i = 0; i < arrTmp.length; i++) 
  {
    var arrTemp = arrTmp[i].split("=");
    
    if (arrTemp[0].toUpperCase() == strName.toUpperCase()) 
      return arrTemp[1];
  }
  return "";
}

var div = document.getElementById("div_swf");
var sSwfFile = Request("swf");




var sHtml="<video id=\"media\" width=\"1000\" height=\"540\" autoplay=\"autoplay\" controls>\n" +
"<source src=\"@\">\n" + 
"</video>";



sHtml = sHtml.replace(/@/g, sSwfFile);
div.innerHTML = sHtml;
