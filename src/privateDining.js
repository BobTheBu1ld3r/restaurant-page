import updatePage from "./updatePage.js";

export default function renderPrivateDiningPage() {
  const htmlContent = `
  <div class="private-dining-container">
  <h2 class="subtitle-text">Private Dining at The Ivy West Street</h2>
  <h3 class="sub-subtitle-text">Please select a private dining area</h3>
  <div class="image-container large-text">
    <div class="private-room">The Private Room</div>
    <div class="the-loft">The Loft</div>
  </div>
  <p class="body-text private-dining-content">
    When it comes to creating special occasions, we go above and beyond.
    Our stunning private dining space fuses elegant charm with unique
    character to meet the needs and desires of any occasion. Whether you
    are entertaining friends, having a business meeting or hosting a
    festive party, our private dining room can be booked for breakfast,
    lunch and dinner. Seasonal menus can be tailored to suit all food and
    beverage preferences. These versatile spaces also nod to the local
    area by way of colourful design touches and artwork. Our dedicated
    events team will provide inimitable service to help with all the
    arrangements from your initial enquiry right through to the event
    itself, ensuring you enjoy a private dining experience like no other.
    Our live private dining availability calendar saves you from having to
    enquire in advance and gives you the convenience of securing the
    perfect date for any occasion.
  </p>
</div>
    `;
  const privateDiningButton = document.querySelector(
    "button.link.private-dining"
  );
  updatePage(htmlContent, privateDiningButton);
}
