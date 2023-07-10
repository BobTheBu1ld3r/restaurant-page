export default function updatePage(htmlContent, activeLinkElement) {
  render(htmlContent);
  document.querySelectorAll("button.link").forEach((element) => {
    element.classList.remove("active");
  });
  activeLinkElement.classList.add("active");
}

const render = (htmlContent) =>
  (document.querySelector("div.content").innerHTML = htmlContent);
