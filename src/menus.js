import updatePage from "./updatePage.js";

export default function renderMenusPage() {
  const menusButton = document.querySelector("button.menus");
  const htmlContent = `
  <div>
    <p>This is the Menus page. What a cool page this is!</p>
  </div>
  `;

  updatePage(htmlContent, menusButton);
}
