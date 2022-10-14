let todoInput; //tu wpisuje się treść zadania
let errorInfo; //info o braku zadań/konieczności wpisania tekstu
let addBtn; //przycisk add
let ulList; //lista zadań, tagi ul
let newTask;
let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;
//to zmienne globalne, nic im narazie nie przypisujemy, mozna je zapisać w jednej linii

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
}; //wywolanie funkcji
const prepareDOMElements = () => {
	todoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");
}; //pobieranie el
const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addNewTask);
	ulList.addEventListener("click", checkClick);
}; //nasluchiwanie

const addNewTask = () => {
	if (todoInput.value !== "") {
		newTask = document.createElement("li");
		newTask.textContent = todoInput.value;
		createToolsArea();
		ulList.appendChild(newTask);

		todoInput.value = " ";
		errorInfo.textContent = " ";
	} else {
		errorInfo.textContent = "Wprowadź treść zadania!";
	}
};

const createToolsArea = () => {
	const divTools = document.createElement("div");
	divTools.classList.add("tools");
	newTask.append(divTools);
	const completeBtn = document.createElement("button");
	completeBtn.classList.add("complete");
	completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
	const editBtn = document.createElement("button");
	editBtn.classList.add("edit");
	editBtn.textContent = "EDIT";
	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete");
	deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
	divTools.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".edit")) {
		console.log("edit");
	} else if (e.target.matches(".delete")) {
		console.log("delete");
	}
};
document.addEventListener("DOMContentLoaded", main); //event odpowiadajacy za wczytanie sie calej strony przed uruchomieniem skryptow
