function quellenButton() {
	
	if (document.getElementById('quellen').style.display == "block") {
		document.getElementById('quellen').style.display = "none";	
	} else {
		document.getElementById('quellen').style.display = 'block';
		document.getElementById('quellen').scrollIntoView({ behavior: "smooth"});
	}
}