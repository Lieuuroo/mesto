let editButton = document.querySelector(".profile__edit-button");
let popupDisplay = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileSubtitle = document.querySelector(".profile__subtitle");

function showPopup() {
  popupDisplay.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubtitle.textContent;
}

editButton.addEventListener("click", showPopup);

let closeButton = document.querySelector(".popup__close-button");

function closePopup() {
  popupDisplay.classList.remove("popup_opened");
}

closeButton.addEventListener("click", closePopup);

let formElement = document.querySelector(".popup__form-imput-container");
let nameInput = document.querySelector(".popup__form-item_el_name");
let jobInput = document.querySelector(".popup__form-item_el_job");

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInput.getAttribute("value");
  jobInput.getAttribute("value");



  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

formElement.addEventListener("submit", handleFormSubmit);

let submitButton = document.querySelector(".popup__form-save-button");

submitButton.addEventListener("click", handleFormSubmit);
submitButton.addEventListener("click", closePopup);