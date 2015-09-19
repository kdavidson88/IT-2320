

//---Verify Email Address---//
function verifyMail(){
	var mail = document.getElementById("mail");
	
	if (name.value ==""){
		alert("Please enter a valid email address");
		return false;
	}
}

//---Alert on Page reset----//

function pageReset(){
	alert("Your information has been reset");
}

//---Unobtrusive Name Verify---//

function(){
	document.getElementById('name').onchange = verifyName();
}

function verifyName(){
	if(typeof name != 'String'){
		alert("Please enter a valid name")
	}
}


//---Unobtrusive Mail Verify---//

function(){
	document.getElementById('mail').onchange = verifyMail();
}

function verifyMail(){
	if(typeof mail != 'String'){
		alert("Please enter a valid Email address")
	}
}
