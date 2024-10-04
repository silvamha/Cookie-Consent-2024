const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const classModalCloseBtn = document.querySelector(".modal-close-btn");

// let testTimeOut = () =>{
//     setTimeout(() =>{
//         let testArray = [1, 2, 3]
//         for (let i = 0; i < testArray.length; i++){
//             console.log(testArray[i])
//         }
//     },3000)
// }

// let testTimeOut = setTimeout(() =>{

// },3000)

// console.log("What is the capital of Peru?");

// setTimeout(function () {
//   console.log("Lima!");
// }, 3000);

// setTimeout(function () {
//   modal.style.display = "inline";
// }, 3000);

classModalCloseBtn.addEventListener("click", () => {
  modalCloseBtn.classList.remove("modal-close-btn");
  modal.style.display = "none";
  modal.style.backgroundColor = "red";
});

modalCloseBtn.addEventListener("click", () => {
  modalCloseBtn.style.display = "none";
  // modalCloseBtn.classList.add("modal-close-btn")
  // modal.style.backgroundColor = "red";
  console.log("I was clicked!");
});

const disbleBtn = () => {
  modalCloseBtn.disabled = true;
};

/*
Challenge:
1. Make the third console.log fire 3 seconds after 
   the answer appears.
*/

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalCloseBtn.removeAttribute("disabled");
  // modalCloseBtn.classList.add("modal-close-btn")
  // modal.style.backgroundColor = "red";
  console.log("I was clicked!");
});

// declineBtn.addEventListener("click", () => {
//   modal.style.display = "none";
//   modalCloseBtn.style.display = "none";
//   // modalCloseBtn.classList.add("modal-close-btn")
//   // modal.style.backgroundColor = "red";
//   console.log("I was clicked!");
// });
let count = 0;
const counterFunction = () => {
  count++;
  console.log(count);
  if (count > 3) {
    console.log("Execute code here");
  }
};

modal.style.display = "inline";

const newElement = document.createElement("div");
modal.appendChild(newElement);

const newPara = document.createElement("p");
newPara.textContent = "Hello";
newElement.appendChild(newPara);

const testClassEl =  document.querySelector(".test-class-el");


newElement.classList.add("test-class-el");
const buttonContainer = document.querySelector("#button-container");
const testToggle1 = document.querySelector(".test-toggle1");

// testToggle1.addEventListener("click", () => {

// testToggle1.classList.toggle("change-color1");
// buttonContainer.classList.toggle("toggleDiv");
// });


const myArray=[1,2,3,4]

for (let array of myArray){ 
    console.log(array)
}