const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = []; // const -> let으로 바꿔준 이유는, 웹을 새로고침 했을 때 <입력받았던 값을 기억하기 위함>이다.

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement; //target : button, parentElement : li
    // console.log(typeof(li.id))
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText ="⚡️";
    button.addEventListener("click",deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); //새로고침 막아주기
    const newToDo = toDoInput.value; //input으로 들어오는 값을 할당해준다
    toDoInput.value = ""; //위에서 값을 넣어준 뒤에 공간을 비운다.
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    };
    toDos.push(newToDoObj); //빈 배열에 newToDoObj로 들어온 값을 더해준다.
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 새로고침 하고 난 뒤에도 이전의 로컬스토리지 값을 유지하도록 한다.
    parsedToDos.forEach(paintToDo); //for each는 배열의 요소마다 실행한다.
}