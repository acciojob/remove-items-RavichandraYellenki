//your JS code here. If required.
function removeColor(){
	let selectElement = document.getElementById("colorSelect");
	let output = selectElement.value;
	if(output ==="red"){
		let elementToBeRemoved = document.getElementById("1");
		elementToBeRemoved.remove();
	}
	else if(output ==="green"){
		let elementToBeRemoved = document.getElementById("2");
		elementToBeRemoved.remove();
	}
	else if(output ==="white"){
		let elementToBeRemoved = document.getElementById("3");
		elementToBeRemoved.remove();
	}
	else if(output ==="black"){
		let elementToBeRemoved = document.getElementById("4");
		elementToBeRemoved.remove();
	}
}