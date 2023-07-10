import updatePage from "./updatePage.js";

export default function renderPrivateDiningPage() {
  const htmlContent = `
    <div>
      <p>This is the Private Dining page. What a cool page this is!</p>
    </div>
    `;
  const privateDiningButton = document.querySelector(
    "button.link.private-dining"
  );
  updatePage(htmlContent, privateDiningButton);
}
