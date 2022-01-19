const rightArrowBtn = document.getElementById("right-arrow");
const screenComponents = document.getElementById("section-first");
const todoSection = document.getElementById("section-second");
const leftArrowBtn = document.getElementById("left-arrow");

// console.log(screenComponents);
todoSection.style.left = "1200px";
screenComponents.style.right = "0px";
screenComponents.style.left = "200px";

function handdleScreenComponents() {
    screenComponents.style.right = "1500px";
    screenComponents.style.left = "-3000px";
    todoSection.style.left = "-300px";
}

function handdleTodoList() {
    todoSection.style.left = "1200px";
    screenComponents.style.right = "0px";
    screenComponents.style.left = "200px";
}

rightArrowBtn.addEventListener("click", handdleScreenComponents);
leftArrowBtn.addEventListener("click", handdleTodoList);

// if (!switching) {
//     todoSection.style.left = "1000px";
// } else {
//     console.log(switching);
// }