//---Verify if First and Last Name are string---//

function verifyName() {	
	var name = document.getElementById("name");
	
	if (name.value ==""){
		alert("Please enter a valid name");
		return false;
	}
}

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
