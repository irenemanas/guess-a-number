"use strict";

const userNumberElement = document.querySelector(".js-inputNumber");
const buttonElement = document.querySelector(".js-button");
const tipElement = document.querySelector(".js-tip");
const inputCounter = document.querySelector(".js-attempt");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function renderTip(message) {
  tipElement.innerHTML = "Pista: " + message;
}

function handleClick(event) {
  const userNumberValue = userNumberElement.value;
  const numberValue = parseInt(userNumberValue);

  if (isNaN(numberValue)) {
    renderTip("El número debe estar entre 1 y 100");
  } else if (numberValue < 1 || numberValue > 100) {
    renderTip("El número debe estar entre 1 y 100");
  } else if (numberValue > randomNumber) {
    renderTip("El número es demasiado alto");
  } else if (numberValue < randomNumber) {
    renderTip("El número esdemasiado bajo");
  } else {
    //if (numberValue === randomNumber) {
    renderTip("Has ganado, campeona!!!");
  }
}

function handleClickCounter(event) {
  attempCounter = attempCounter + 1;
  //inputCounter.value = "Número de inetntos: " + attempCounter;
  inputCounter.value = `Número de intentos: ${attempCounter}`;
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);
let attempCounter = 0;

buttonElement.addEventListener("click", handleClick);
buttonElement.addEventListener("click", handleClickCounter);
