const contact = document.querySelector(".background");
let inSessionStorage = sessionStorage.getItem("filled");

if (inSessionStorage) {
  contact.innerHTML = `<h1>Thank you for approaching we will revert back to you soon</h1>`;
  contact.style.textAlign = "center";
  contact.style.paddingBottom = "4.5%";
  contact.style.backgroundImage = "none";
  contact.style.backgroundColor = `rgb(237, 235, 235)`;
  contact.style.color = "black";
}
function sendEmail() {
  sessionStorage.setItem("filled", JSON.stringify(1));
}
