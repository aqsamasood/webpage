function formValidator(){
	// Make quick references to our fields
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var projectDetails=document.getElementById('projectDetails');
	var timeScale=document.getElementById('timeScale');
	
	// Check each input in the order that it appears in the form!
	if(isAlphabet(name, "Please enter only letters for your name!")){
						if(emailValidator(email, "Please enter a valid email address!")){
							if(isProjectDetails(projectDetails, "Please enter project Details!")){
								if(isTimescale(timeScale, "Please enter Time scales!")){				
							      	return true;
							    }
							}
						}
	}
	return false;
	
}

function isAlphabet(name, msg){
	var alphaExp = /^[a-zA-Z]+$/;
	if(name.value.match(alphaExp)){
		return true;
	}else{
		alert(msg);
		name.focus();
		return false;
	}
}

function isProjectDetails(projectDetails, msg){
	 var alphaExp = /^[a-zA-Z]+$/;
	if(projectDetails.value.match(alphaExp)){
		return true;
	}else{
		alert(msg);
		projectDetails.focus();
		return false;
	}
}

function isTimescale(timeScale, msg){
	// var alphaExp = /^[a-zA-Z]+$/;
	if(timeScale){
		return true;
	}else{
		alert(msg);
		timeScale.focus();
		return false;
	}
}


function emailValidator(elem, msg){
	var emailFilter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailFilter)){
		return true;
	}else{
		alert(msg);
		elem.focus();
		return false;
	}
}