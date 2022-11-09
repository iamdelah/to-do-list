let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
	// creating a new paragraph
	var paragraph = document.createElement('p')
	// from css
	paragraph.classList.add('paragraph-styling');
    // adding a paragraph to our value
	paragraph.innerText = inputField.value;
    // add an HTML element
	toDoContainer.appendChild(paragraph);
	// removes the input value
	inputField.value = "";

	paragraph.addEventListener('click', function(){
		paragraph.style.textDecoration = "line-through";
	})

	paragraph.addEventListener('dblclick', function(){
		toDoContainer.removeChild(paragraph);
	})

})