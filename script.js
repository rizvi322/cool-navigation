const hamburgerLink = document.querySelector("#hamburger-link");
const siteContent = document.querySelector("#site-content");
const navigationGrid = document.querySelector("#navigation-grid");
const contentDiv = document.querySelector("div.content");

hamburgerLink.addEventListener('click', e => {
  contentDiv.toggleAttribute("data-show-menu");
  e.preventDefault();
});