import "./main.css";
import "./home.css";
import "./private-dining.css";
import "./menus.css";
import renderHomePage from "./home.js";
import renderMenusPage from "./menus.js";
import renderPrivateDiningPage from "./privateDining.js";

import Logo from "./ivy-logo.svg";

const logoElement = document.querySelector(".logo");

const logo = new Image();
logo.src = Logo;

logoElement.appendChild(logo);

renderHomePage();

const content = document.querySelector("div.content");

const homeButton = document.querySelector("button.home");
const menusButtons = document.querySelectorAll("button.menus");
const privateDiningButton = document.querySelector("button.private-dining");

homeButton.addEventListener("click", renderHomePage);
menusButtons.forEach((button) =>
  button.addEventListener("click", renderMenusPage)
);
privateDiningButton.addEventListener("click", renderPrivateDiningPage);
