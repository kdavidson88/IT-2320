window.onload = function Verify()
{
	var contactMe = document.getElementById("contactMe");
	contactMe.addEventListener("submit", Verify);
}

function Verify(contactMe){
	var name = document.getElementById("name");
	if (name == ""){
		alert("Please enter a valid value")
	}
}