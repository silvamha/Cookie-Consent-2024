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

setTimeout(function () {
  modal.style.display = "inline";
}, 3000);

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
