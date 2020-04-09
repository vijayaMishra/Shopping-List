var list = document.getElementsByTagName("li");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function addToggle() {
 	this.classList.toggle("done");
}
function removeParent(evt) {
 	evt.target.parentNode.remove();
}

function appendDeleteButton(li) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("X"));
	btn.onclick = removeParent;
	li.appendChild(btn);
    btn.style.background = '#4252A4';

}
function addInputToList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	appendDeleteButton(li);
	li.addEventListener("click", addToggle);
	ul.appendChild(li);
	input.value = "";
}

button.addEventListener("click", function() {
	if(input.value.length > 0) {
		addInputToList();
	}
})

input.addEventListener("keypress", function(event) {
		if(input.value.length > 0  && event.keyCode === 13) {
		addInputToList();
	}
})


















// var list = document.getElementsByTagName("li");
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// for(var i=0; i<list.length; i++) {
// 	list[i].addEventListener("click", liClick);
// }
// function liClick() {
// 	this.classList.toggle("done");
// }

// function inputLength() {
// 	return input.value.length;
// }


// function listLength() {
// 	return list.length;
// }


// function createListElement() {
// 	var btn = document.createElement("button");
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if(inputLength() > 0) { 
// 		createListElement();
// 	}
// 	for(var i=0; i<list.length; i++) {
// 		list[i].addEventListener("click", liClick);
// 	}
// 	function liClick() {
// 		this.classList.toggle("done");
// 	}

// }

// function addListAfterKeypress(event) {
// 	if(inputLength() > 0 && event.keyCode === 13) { 
// 		createListElement();
// 	}
// 	for(var i=0; i<list.length; i++) {
// 		list[i].addEventListener("click", liClick);
// 	}
// 	function liClick() {
// 		this.classList.toggle("done");
// 	}

// }

// //button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

// function deleteButton() {
// 	var btn = document.createElement("button");
// 	btn.appendChild(document.createTextNode("Delete!"));
// 	list[i].appendChild(btn);
// 	btn.onclick = removeParent;
// }

// for(i=0; i<listLength(); i++) {
// 	deleteButton();
// }

// function removeParent(evt) {
// 	evt.target.parentNode.remove();
// }










//REFACTORING - making code look a little bit better

// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseleave", function() {
// 	console.log("CLICK!!!")
// })

//mouseenter
// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function() {
// 	console.log("CLICK!!!")
// })

// add an event listener to button whenever the user
//clicks I want to run this function and this function is
//console log clicks


// button.addEventListener("click", function() {
// 	if(input.value.length > 0) { 
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 	}
// })

// input.addEventListener("keypress", function(event) {
// 	if(input.value.length > 0 && event.keyCode === 13) { //event.keyCode=event.which
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 	}
// })