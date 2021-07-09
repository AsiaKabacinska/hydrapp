import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const glassCounter = document.querySelector(".glass__counter--js");
const buttonAdd = document.querySelector(".button-add--js");
const buttonRemove = document.querySelector(".button-remove--js");
//uniwersalny klucz pod krótym trzymamy aktualne wartości
const key = new Date().toLocaleString().slice(0, 10);

let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  currentGlassCounter = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

// wrzucam wartosc, która jest przypisan w currentGlassCounter (currentGlassCounter = localStorageValue;)
glassCounter.innerHTML = currentGlassCounter;

buttonAdd.addEventListener("click", () => {
  currentGlassCounter++;
  glassCounter.innerHTML = currentGlassCounter;
  localStorage.setItem(key, currentGlassCounter);
});

buttonRemove.addEventListener("click", () => {
  if (currentGlassCounter > 0) {
    currentGlassCounter--;
  }
  glassCounter.innerHTML = currentGlassCounter;
  localStorage.setItem(key, currentGlassCounter);
});
