import updatePage from "./updatePage.js";

export default function renderHomePage() {
  const htmlContent = `
    <div>
      <p>This is the Home page. What a cool page this is!</p>
    </div>
    `;

  const homeButton = document.querySelector("button.link.home");

  updatePage(htmlContent, homeButton);
}
