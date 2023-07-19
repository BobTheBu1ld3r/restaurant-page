import updatePage from "./updatePage.js";

export default function renderMenusPage() {
  const menusButton = document.querySelector("button.menus");
  const htmlContent = `
  <div class="menus-page-container">
  <div class="menus-hero">Menus</div>
  <div class="name-container">
    <p>The Ivy, West street</p>
  </div>
  <div class="menu-container">
    <div class="card">
      <div class="large-card-text">A La Carte</div>
    </div>
    <div class="card">
      <div class="large-card-text">Set Menu</div>
      <div class="medium-card-text">Monday - Friday</div>
      <div class="small-card-text">2:30pm - 6pm</div>
    </div>
    <div class="card">
      <div class="large-card-text">Dessert</div>
    </div>
    <div class="card">
      <div class="large-card-text">Brunch</div>
      <div class="medium-card-text">Saturday & Sunday</div>
      <div class="small-card-text">11:30am - 3:45pm</div>
    </div>
    <div class="card">
      <div class="large-card-text">Vegan & Vegetarian</div>
    </div>
    <div class="card">
      <div class="large-card-text">Drinks</div>
    </div>
    <div class="card">
      <div class="large-card-text">Wine List</div>
    </div>
  </div>
</div>
  `;

  updatePage(htmlContent, menusButton);
}
