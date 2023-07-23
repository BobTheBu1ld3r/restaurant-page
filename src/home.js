import updatePage from "./updatePage.js";
import renderMenusPage from "./menus.js";

export default function renderHomePage() {
  const htmlContent = `
  <div class="hero-section">
  <h3 class="hero-title">Celebrate the new Season</h3>
  <p class="hero-copy">
    Capture the essence of summer with our Fresh and Flavourful A La Carte
    Menu
  </p>
  <button class="view-menu nav-button menus">View Menu</button>
</div>
<div class="section-2">
  <button class="nav-booking nav-button">Book A Table</button>
  <div class="section-2-content-container body-text">
    <p>
      The Ivy is a haven of style and unfaltering service that shows a
      dedication to food that has set the standard for British dining
      since its foundation in 1917.<br /><br />
      With an enduring celebration of the arts and culture that have
      defined it since its naissance, The Ivy remains part of the fabric
      of London life, and a home away from home for its many loyal guests.
    </p>
    <p>
      Established in the heart of Theatre Land in London’s Covent Garden,
      The Ivy’s restaurant and upstairs private dining room are the
      epitome of glamour. With its iconic shimmering Central Dining Bar,
      signature harlequin stained-glass windows, oak panelling and
      striking contemporary art collection, the longevity of this most
      British restaurant is assured.<br /><br />
      Head Chef, Patrizio Petrucci and Head of Beverage, David Ray present
      seasonal menus that bring The Ivy classics through the ages and
      places them alongside more contemporary dishes & drinks from around
      the globe.
    </p>
  </div>
  <button class="nav-menus nav-button menus">Menus</button>
</div>
    `;

  const homeButton = document.querySelector("button.link.home");

  updatePage(htmlContent, homeButton);

  const menusButtons = document.querySelectorAll("button.menus");
  menusButtons.forEach((button) =>
    button.addEventListener("click", renderMenusPage)
  );
}
