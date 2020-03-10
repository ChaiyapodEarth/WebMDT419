function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;


var parameter , username, pas;

function loginLoad(){
	// วิธีใช้ getParams()
	var form = document.getElementById("myLogin")
   
	parameter = getParams();
	username = parameter["username"]
	pas = parameter["password"]
	console.log(username);
	console.log(pas);
	form.onsubmit = checkLogin;
}

function checkLogin(){
	// alert(username);
	// alert(pas);

	var Form = document.forms["myLogin"];
	var Input_username = Form["username"].value;
	var Input_password = Form["password"].value;
	console.log(Input_username);
	console.log(Input_password);

	if( username == Input_username && pas == Input_password)
	{
		alert("Conplete!");
		return true;
		
	}
	else
	{
		alert("Username not match!");
		return false;
	}
	
}

			