window.onload = function Verify()
{
	var contactMe = document.getElementById("contactMe");
	contactMe.addEventListener("submit", Verify);
}

function validateForm(){
	var x = document.forms["contactMe"]["name"].value;
    var y = document.forms["contactMe"]["mail"].value;
	var z = document.forms["contactMe"]["comment"].value;
	if (x == null || x == ""){
		alert("Please enter a valid name");
		return false;
	}
	if(x.length > 30){
		alert("Name to long");
		return false;
	}

	if (y == null || y == ""){
		alert("Please enter a valid email");
		return false;
	}
	
}