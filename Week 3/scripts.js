//---Verify if First and Last Name are string---//

function verifyName() {	
	var name = document.getElementById("name");
	
	if (name.value ==""){
		alert("Please enter a valid name");
		return false;
	}
}

//-----------------------------------------------//

function stringCheckFirst(Name){
	var letter = /^[a-zA-Z]+$/;
	if(inputtxt.value.match(letter)){
		return true;
	}
	else{
		alert("Enter a valid name");
		return false;
	}
}

//---Alert on Page reset----//

function pageReset(){
	alert("Please enter the correct information");
}

function manualReset(){
	document.getElementById=("contactME").reset();
}

