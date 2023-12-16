// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));

import "./styles/style.css";

// СТВОРИ СПИСОК ЗАМІТОК НА ДЕНЬ:
// 1)ПОЛУЧИТИ ДОСТУП ДО ЕЛЕМЕНТІВ ФОРМИ, ПРИ НАТИСКАННЯ НА КНОПОЧКУ ADD

const form = document.querySelector("#form");
const input = document.querySelector("#input");

///2)НА ОСНОВІ ДАНИХ ЯКІ МИ ВЗЯЛИ З ФОРМИ ВІДМАЛЮВАТИ ЕЛЕМЕНТИ СПИСКУ НА ЕКРАН
const list = document.querySelector(".list");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const item = input.value;
  console.log(item);

  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.append(listItem);

  const listItems = JSON.parse(localStorage.getItem("listItems")) || [];
  listItems.push(item);

  addToLocalStorage(listItems);

  input.value = "";
}

// 3)ДОДАЙ ЦЕЙ СПИСОК ДО ЛОКАЛ СТОРЕДЖ

function addToLocalStorage(listItems) {
  localStorage.setItem("listItems", JSON.stringify(listItems));
}

// 4)ДОДАЙ ДОДАТКОВИЙ ФУНКЦІОНАЛ, ЩОБ ПРИ ОНОВЛЕННІ СТОРІНКИ СПИСОК НЕ ВИДАЛЯВСЯ
function readLocalStorage() {
  const isInStorage = localStorage.getItem("listItems");
  if (isInStorage) {
    const listItems = JSON.parse(isInStorage);
    for (const el of listItems) {
      const listItem = document.createElement("li");
      listItem.textContent = el;
      list.append(listItem);
    }
  }
}

readLocalStorage();

//5)СТВОРЮЄМО КНОПОЧКУ, ПРИ ЯКОМУ БУДЕ ОЧИЩАВСЯ ЛОКАЛ СТОРЕДЖ
const clearingBtn = document.querySelector(".clear");

clearingBtn.addEventListener("click", clearAll);

function clearAll() {
  localStorage.removeItem("listItems");
  list.innerHTML = "";
}
