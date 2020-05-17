// JavaScript Document
String.prototype.Trim  =  function()  
{  
return  this.replace(/(^\s*)  |(\s*$)/g,  "");  
}  
 
String.prototype.LTrim  =  function()  
{  
return  this.replace(/(^\s*)/g,  "");  
}  
 
String.prototype.RTrim  =  function()  
{  
return  this.replace(/(\s*$)/g,  "");  
}  
function ck_uesr_email(strValue){
	if (strValue.Trim()=="")
	 {
		document.getElementById("uesr_email_msg").innerHTML="<span class='redfont'><img src='images/icon_err.gif' />&nbsp;请输入您的邮箱地址!</span>";　
	 }
	 else
	 {
		if(!/(\S)+[@]{1}(\S)+[.]{1}(\w)+/.test(strValue))
		{
			document.getElementById("uesr_email_msg").innerHTML="<span class='redfont'><img src='images/icon_err.gif' />&nbsp;请输入您正确的邮箱地址!</span>";　
		 }
		 else
		 {
			document.getElementById("uesr_email_msg").innerHTML="<span class='greenfont'><img src='images/icon_right.gif' /></span>";　
		 }	
		 }
}


function ck_frm(){
			if(!/(\S)+[@]{1}(\S)+[.]{1}(\w)+/.test(document.getElementById("uesr_email").value))
		{
			document.getElementById("uesr_email_msg").innerHTML="<span class='redfont'><img src='images/icon_err.gif' />&nbsp;请输入您正确的邮箱地址!</span>";
	document.getElementById("uesr_email").focus();
	return false;　
		 }

	
	if (document.getElementById("message").value.Trim()=="")
	 {
	document.getElementById("message_msg").innerHTML="<span class='redfont'><img src='images/icon_err.gif' />&nbsp;请输入内容！</span>";
	document.getElementById("message").focus();
	return false;　
	 }
	 
document.all("btn_send").disabled="disabled";
document.all("btn_send").value="信息发送中，请稍候...";
	 send_msg.style.visibility="visible";
	 
	 
}