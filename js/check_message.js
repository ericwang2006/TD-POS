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
		document.getElementById("uesr_email_msg").innerHTML="<span class='redfont'><img src='images/icon_err.gif' />&nbsp;���������������ַ!</span>";��
	 }
	 else
	 {
		if(!/(\S)+[@]{1}(\S)+[.]{1}(\w)+/.test(strValue))
		{
			document.getElementById("uesr_email_msg").innerHTML="<span class='redfont'><img src='images/icon_err.gif' />&nbsp;����������ȷ�������ַ!</span>";��
		 }
		 else
		 {
			document.getElementById("uesr_email_msg").innerHTML="<span class='greenfont'><img src='images/icon_right.gif' /></span>";��
		 }	
		 }
}


function ck_frm(){
			if(!/(\S)+[@]{1}(\S)+[.]{1}(\w)+/.test(document.getElementById("uesr_email").value))
		{
			document.getElementById("uesr_email_msg").innerHTML="<span class='redfont'><img src='images/icon_err.gif' />&nbsp;����������ȷ�������ַ!</span>";
	document.getElementById("uesr_email").focus();
	return false;��
		 }

	
	if (document.getElementById("message").value.Trim()=="")
	 {
	document.getElementById("message_msg").innerHTML="<span class='redfont'><img src='images/icon_err.gif' />&nbsp;���������ݣ�</span>";
	document.getElementById("message").focus();
	return false;��
	 }
	 
document.all("btn_send").disabled="disabled";
document.all("btn_send").value="��Ϣ�����У����Ժ�...";
	 send_msg.style.visibility="visible";
	 
	 
}