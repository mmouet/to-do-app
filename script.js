// VERSION 1
// VERSION 1
// VERSION 1

// // Michael Mouet - JS ToDo App

// // Selectors 
// const noteInput = document.querySelector(".note-input");
// const addButton = document.querySelector(".add-button");
// const todoList = document.querySelector(".todo-list");



// // Functions
// const addNote = event => {
// 	// prevent form from auto submitting
// 	event.preventDefault();

// 	// create todo div
// 	const todoDiv = document.createElement("div");
// 	todoDiv.classList.add("todo-div");

// 	// create li new note
// 	const newNote = document.createElement("li");
// 	newNote.innerText = noteInput.value;
// 	newNote.classList.add("todo-note");
// 	todoDiv.appendChild(newNote);

// 	// add todo to local storage
// 	saveLocalStorage(noteInput.value);

// 	// create delete button
// 	const delButton = document.createElement("button");
// 	delButton.innerText = "delete"
// 	delButton.classList.add("del-btn");
// 	delButton.classList.add("btn");
// 	delButton.classList.add("btn-danger");
// 	todoDiv.appendChild(delButton);

// 	// append to list
// 	todoList.appendChild(todoDiv);

// 	// clear input field after running function
// 	noteInput.value = "";
// };

// const delNote = e => {
// 	const item = e.target;
// 	// classList has a length property. del-btn is the 0th class 
// 	if (item.classList[0] === "del-btn") {
// 		const todoNote = item.parentElement;
// 		todoNote.remove();
// 		removeLocalStorage(todoNote);
// 	}
// };


// // LOCAL STORAGE FUNCTIONS

// const saveLocalStorage = storage => {
// 	// storage check
// 	let todos;
// 	if (localStorage.getItem("todos") === null) {
// 		// create empty array if nothing is there
// 		todos = [];
// 	} else {
// 		// if todos are there, get array
// 		todos = JSON.parse(localStorage.getItem("todos"));
// 	};
	
// 	// push array into local storage
// 	todos.push(storage);
// 	localStorage.setItem("todos", JSON.stringify(todos));
// };



// const getStorage = () => {
// 	// code repeats so it saves on refresh
// 	let todos;
// 	if (localStorage.getItem("todos") === null) {
// 		// create empty array if nothing is there
// 		todos = [];
// 	} else {
// 		// if todos are there, get array
// 		todos = JSON.parse(localStorage.getItem("todos"));
// 	};

// 	todos.forEach(function(storage) {
// 		const todoDiv = document.createElement("div");
// 		todoDiv.classList.add("todo-div");

// 		// create li new note
// 		const newNote = document.createElement("li");
// 		newNote.innerText = storage;
// 		newNote.classList.add("todo-note");
// 		todoDiv.appendChild(newNote);

// 		// create delete button
// 		const delButton = document.createElement("button");
// 		delButton.innerText = "delete"
// 		delButton.classList.add("del-btn")
// 		delButton.classList.add("btn");
// 		delButton.classList.add("btn-danger");;
// 		todoDiv.appendChild(delButton);

// 		// append to list
// 		todoList.appendChild(todoDiv);
// 	});
// };


// const removeLocalStorage = storage => {
// 	let todos;
// 	if (localStorage.getItem("todos") === null) {
// 		todos = [];
// 	} else {
// 		todos = JSON.parse(localStorage.getItem("todos"));
// 	};

// 	const todoIndex = storage.children[0].innerText;
// 	todos.splice(todos.indexOf(todoIndex), 1);
// 	localStorage.setItem("todos", JSON.stringify(todos));
// };


// // Event Listeners

// document.addEventListener("DOMContentLoaded", getStorage)
// // loads html content first before css and images
// addButton.addEventListener("click", addNote);
// todoList.addEventListener("click", delNote);






// Michael Mouet - JS ToDo App

// Selectors 
const noteInput = document.querySelector(".note-input");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");



// Functions
const addNote = event => {
	// prevent form from auto submitting
	event.preventDefault();

	// create todo div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo-div");

	// create li new note
	const newNote = document.createElement("li");
	newNote.innerText = noteInput.value;
	newNote.classList.add("todo-note");
	todoDiv.appendChild(newNote);

	// add todo to local storage
	saveLocalStorage(noteInput.value);

	// create delete button
	const delButton = document.createElement("button");
	delButton.innerText = "delete"
	delButton.classList.add("del-btn");
	delButton.classList.add("btn");
	delButton.classList.add("btn-danger");
	todoDiv.appendChild(delButton);

	// append to list
	todoList.appendChild(todoDiv);

	// clear input field after running function
	noteInput.value = "";
};

const delNote = e => {
	const item = e.target;
	// classList has a length property. del-btn is the 0th class 
	if (item.classList[0] === "del-btn") {
		const todoNote = item.parentElement;
		todoNote.remove();
		removeLocalStorage(todoNote);
	}
};


// LOCAL STORAGE FUNCTIONS

const saveLocalStorage = storage => {
	if (localStorage.getItem("todos") === null) {
    	axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
        	let todos = []
        	for (let i = 0; i < 5; i++) {
            	const placeholderText = response.data[i].title;
    	    	todos.push(placeholderText);
        	};
		localStorage.setItem("todos", JSON.stringify(todos));
        });	
	} else {
		// if todos are there, get array
		let todos = JSON.parse(localStorage.getItem("todos"));
		todos.push(storage);
		localStorage.setItem("todos", JSON.stringify(todos));
	};
	// push array into local storage
};



const getStorage = () => {
	// code repeats so it saves on refresh
	if (localStorage.getItem("todos") === null) {
    	axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
        	let todos = []
        	for (let i = 0; i < 5; i++) {
            	const placeholderText = response.data[i].title;
    	    	todos.push(placeholderText);
        	};
		localStorage.setItem("todos", JSON.stringify(todos));
        });

    	todos.forEach(function(storage) {
			const todoDiv = document.createElement("div");
			todoDiv.classList.add("todo-div");

			// create li new note
			const newNote = document.createElement("li");
			newNote.innerText = storage;
			newNote.classList.add("todo-note");
			todoDiv.appendChild(newNote);

			// create delete button
			const delButton = document.createElement("button");
			delButton.innerText = "delete"
			delButton.classList.add("del-btn")
			delButton.classList.add("btn");
			delButton.classList.add("btn-danger");;
			todoDiv.appendChild(delButton);

			// append to list
			todoList.appendChild(todoDiv);
		});
	} else {
		// if todos are there, get array
		let todos = JSON.parse(localStorage.getItem("todos"));
		todos.forEach(function(storage) {
			const todoDiv = document.createElement("div");
			todoDiv.classList.add("todo-div");

			// create li new note
			const newNote = document.createElement("li");
			newNote.innerText = storage;
			newNote.classList.add("todo-note");
			todoDiv.appendChild(newNote);

			// create delete button
			const delButton = document.createElement("button");
			delButton.innerText = "delete"
			delButton.classList.add("del-btn")
			delButton.classList.add("btn");
			delButton.classList.add("btn-danger");;
			todoDiv.appendChild(delButton);

			// append to list
			todoList.appendChild(todoDiv);
		});
	};
};


const removeLocalStorage = storage => {
	if (localStorage.getItem("todos") === null) {
		axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
        	let todos = []
        	for (let i = 0; i < 5; i++) {
            	const placeholderText = response.data[i].title;
    	    	todos.push(placeholderText);
        	};
		localStorage.setItem("todos", JSON.stringify(todos));
        });

    	const todoIndex = storage.children[0].innerText;
		todos.splice(todos.indexOf(todoIndex), 1);
		localStorage.setItem("todos", JSON.stringify(todos));
	} else {
		let todos = JSON.parse(localStorage.getItem("todos"));

		const todoIndex = storage.children[0].innerText;
		todos.splice(todos.indexOf(todoIndex), 1);
		localStorage.setItem("todos", JSON.stringify(todos));
	};
};


// Event Listeners

document.addEventListener("DOMContentLoaded", getStorage)
// loads html content first before css and images
addButton.addEventListener("click", addNote);
todoList.addEventListener("click", delNote);



// API TESTING
const defaultStorage = () => {

	// let todos;
	// if (localStorage.getItem("todos") === null) {
	// 	todos = [];
	// } else {
	// 	todos = JSON.parse(localStorage.getItem("todos"));
	// };
	// todos.push(todo);
	// localStorage.setItem("todos", JSON.stringify(todos));


	if (1 === 1) {
    	axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
        	let testStorage = []
        	for (let i = 0; i < 5; i++) {
            	const placeholderText = response.data[i].title;
    	    	testStorage.push(placeholderText);
    	    	// console.log("Within for loop " + testStorage)
        	}
	    	localStorage.setItem("testBaby", JSON.stringify(testStorage))
			console.log("Within promise:" + testStorage)
        })	
	} else {
		let testStorage = [5]
		console.log("Within else " + testStorage)
	}
	// console.log("Within if statement " + localStorage)
};