//your JS code here. If required.
function removeColor(){
	let selectElement = document.getElementById("colorSelect");
	let output = selectElement.value;
	if(output ==="Red"){
		let elementToBeRemoved = document.getElementById("1");
		elementToBeRemoved.remove();
	}
	else if(output ==="Green"){
		let elementToBeRemoved = document.getElementById("2");
		elementToBeRemoved.remove();
	}
	else if(output ==="White"){
		let elementToBeRemoved = document.getElementById("3");
		elementToBeRemoved.remove();
	}
	else if(output ==="Black"){
		let elementToBeRemoved = document.getElementById("4");
		elementToBeRemoved.remove();
	}
}