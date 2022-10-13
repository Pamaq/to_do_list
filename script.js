let todoInput; //tu wpisuje się treść zadania
let errorInfo; //info o braku zadań/konieczności wpisania tekstu
let addBtn; //przycisk add
let ulList; //lista zadań, tagi ul
let newTask;
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
}; //nasluchiwanie

const addNewTask = () => {
	if (todoInput.value !== "") {
		newTask = document.createElement("li");
		newTask.textContent = todoInput.value;
		ulList.appendChild(newTask);
		todoInput.value = " ";
		errorInfo.textContent = " ";
	} else {
		errorInfo.textContent = "Wprowadź treść zadania!";
	}
};

document.addEventListener("DOMContentLoaded", main); //event odpowiadajacy za wczytanie sie calej strony przed uruchomieniem skryptow
