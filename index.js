let editButton = document.querySelector(".profile__edit-button");
let popupDisplay = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileSubtitle = document.querySelector(".profile__subtitle");
let closeButton = document.querySelector(".popup__close-button");
let formElement = document.querySelector(".popup__form-imput-container");
let nameInput = document.querySelector(".popup__form-item_el_name");
let jobInput = document.querySelector(".popup__form-item_el_job");
let submitButton = document.querySelector(".popup__form-save-button");

function showPopup() {
  popupDisplay.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closePopup() {
  popupDisplay.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInput.getAttribute("value");
  jobInput.getAttribute("value");

  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

formElement.addEventListener("submit", handleFormSubmit);
closeButton.addEventListener("click", closePopup);
editButton.addEventListener("click", showPopup);
submitButton.addEventListener("click", handleFormSubmit);
submitButton.addEventListener("click", closePopup);