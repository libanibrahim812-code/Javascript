// createElemen and appendChild

// let bigTitle = document.createElement("h1");
// bigTitle.textContent = "Liban";
// document.body.appendChild(bigTitle);

// my boss told me 100 times h1
// for (let i = 0; i < 100; i++){
//     let bigTitle = document.createElement("h1")
//     bigTitle.textContent = i+" "+"Liban"
//     document.body.appendChild(bigTitle)

// }

//-----------------------------------------------------

//insertBefore
// let spanElement = document.createElement("span")
// spanElement.textContent = "Before element"
// document.body.insertBefore(spanElement,bigTitle)

// //-----------------------------------------------------

// //replaceChild
// let divElement = document.createElement("div")
// divElement.textContent = "div ugu horeeye"
// document.body.replaceChild(divElement,spanElement)

// //-----------------------------------------------------

// //removeChild
// document.body.removeChild(divElement);

//innerHtml : wuxuu aqoonsanaa tagska
// let container = document.createElement("div");
// container.innerHTML = "<p>paragraph1 inside div</p>";
// document.body.appendChild(container);

//***********************************************************************************************

// Selecting HTML elements and CSS selectors with JavaScript DOM, so as to modify control it.

//getElementById
// let greeting = document.getElementById("mow");
// greeting.textContent = "Karibu"

//querySelector() is for single like id

// let greeting = document.querySelector("#mow");
// greeting.textContent = "Karibu"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//getElementsByTagName
// let allTheH1s = document.getElementsByTagName("h1");
// for (let i = 0; i < allTheH1s.length; i++) {
//   allTheH1s[i].style.color = "red";
// }

// let allTheH1s = document.querySelectorAll("h1");
// for (let i = 0; i < allTheH1s.length; i++) {
//   allTheH1s[i].style.color = "red";
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//getElementByName
// let allTheH1s = document.getElementsByName("h1Member");
//  for(let i = 0; i < allTheH1s.length; i++){
// allTheH1s[i].style.color = "blue"
//  }

// let allTheH1s = document.querySelectorAll("[name = h1Member]");
// for (let i = 0; i < allTheH1s.length; i++) {
// allTheH1s[i].style.color = "blue";
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//getElementsByClassName
// let parag = document.getElementsByClassName("blueBorder");
// for (let i = 0; i < parag.length; i++) {
// parag[i].style.color = "skyblue";
// }

//querySelectorall() is for more than one
// let parag = document.querySelectorAll(".blueBorder");
// for (let i = 0; i < parag.length; i++) {
// parag[i].style.color = "blueviolet"
// }
