import "./style.css";
import renderHomePage from "./home.js";
import renderMenusPage from "./menus.js";
import renderPrivateDiningPage from "./privateDining.js";

const content = document.querySelector("div.content");

const homeButton = document.querySelector("button.home");
const menusButtons = document.querySelectorAll("button.menus");
const privateDiningButton = document.querySelector("button.private-dining");

homeButton.addEventListener("click", renderHomePage);
menusButtons.forEach((button) =>
  button.addEventListener("click", renderMenusPage)
);
privateDiningButton.addEventListener("click", renderPrivateDiningPage);

// renderHomePage();
