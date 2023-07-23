import "./main.css";
import "./home.css";
import "./private-dining.css";
import "./menus.css";
import renderHomePage from "./home.js";
import renderMenusPage from "./menus.js";
import renderPrivateDiningPage from "./privateDining.js";

import Logo from "./ivy-logo.svg";

document.querySelector("body").innerHTML = `<nav>
<ul>
  <li>
    <div class="logo"></div>
  </li>
  <li class="link"><button class="link home">Home</button></li>
  <li class="link"><button class="link menus">Menus</button></li>
  <li class="link">
    <button class="link private-dining">Private Dining</button>
  </li>
  <li class="booking">
    <button class="booking-button">Book A Table</button>
  </li>
</ul>
</nav>
<div class="home content"></div>
<footer>
<div class="foot-columns">
  <div class="col">
    <h3>Newsletter</h3>
    <input type="text" placeholder="First Name*" name="first-name" />
    <input type="text" placeholder="First Name*" name="first-name" />
    <input type="text" placeholder="First Name*" name="first-name" />
    <p>THE IVY West Street</p>
    <input type="text" placeholder="First Name*" name="first-name" />
    <p>
      By signing up you are agreeing to receive the latest news and
      exclusive offers from our restaurants.
    </p>
    <button class="sign-up">SIGN UP</button>
  </div>
  <div class="col">
    <p>FAQ</p>
    <p>Contact us</p>
    <p>Caring Family Foundation</p>
    <p>Gifts</p>
  </div>
  <div class="col">
    <p>Privacy Policy</p>
    <p>Cookie Policy</p>
    <p>Gender Pay Gap</p>
    <p>Animal Welfare</p>
    <p>Modern Slavery Statement</p>
  </div>
</div>
<div class="footer-second-menu">
  <p>© The Ivy Collection</p>
</div>
</footer>`;

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
