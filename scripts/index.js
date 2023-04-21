const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupDisplay = document.querySelector(".popup_type_edit-profile");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const buttonClosePopup = document.querySelector(".popup__close-button");
const formEditProfile = document.querySelector(".popup__form-imput-container");
const nameInput = document.querySelector(".popup__form-item_el_name");
const jobInput = document.querySelector(".popup__form-item_el_job");
const placeInput = document.querySelector(".popup__form-item_el_place");
const linkInput = document.querySelector(".popup__form-item_el_link");
const cardsTemplate = document.querySelector("#cards");
const cardsDisplay = document.querySelector(".cards");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupAddCardDisplay = document.querySelector(".popup_type_add-card");
const buttonAddCardClose = popupAddCardDisplay.querySelector(
  ".popup__close-button"
);
const cardForm = document.querySelector(
  ".popup__form-imput-container_type_add-card"
);
const popupCloseupPhotoDisplay = document.querySelector(
  ".popup_type_photo-closeup"
);
const popupCloseupPhotoCloseButton = popupCloseupPhotoDisplay.querySelector(
  ".popup__close-button"
);
const photoCloseupLink = popupCloseupPhotoDisplay.querySelector(
  ".popup__closeup-photo"
);
const photoCloseupName = popupCloseupPhotoDisplay.querySelector(
  ".popup__closeup-location"
);

function openEditProfilePopup() {
  openPopup(popupDisplay);
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubtitle.textContent;
}

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupPressingEsc);
  popup.removeEventListener("click", closePopupClickingOverlay);
};

function submitEditProfileForm(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup(popupDisplay);
}

const createCardElement = (cardInfo) => {
  const cardElement = cardsTemplate.content
    .querySelector(".cards__item")
    .cloneNode(true);

  const cardPhoto = cardElement.querySelector(".cards__photo");
  const cardPlace = cardElement.querySelector(".cards__location-name");

  cardPhoto.src = cardInfo.link;
  cardPhoto.alt = cardInfo.name;
  cardPlace.textContent = cardInfo.name;

  const deleteButton = cardElement.querySelector(".cards__delete-button");
  const likeButton = cardElement.querySelector(".cards__like-button");
  const closeupButton = cardElement.querySelector(".cards__closeup-button");

  const handleDelete = () => {
    cardElement.remove();
  };

  const handleLike = () => {
    likeButton.classList.toggle("cards__like-button_active");
  };

  deleteButton.addEventListener("click", handleDelete);

  likeButton.addEventListener("click", handleLike);

  closeupButton.addEventListener("click", () => {
    openPopup(popupCloseupPhotoDisplay);
    fillPhotoCloseupPopup(cardInfo);
  });

  return cardElement;
};

const displayCards = (cardElement) => {
  cardsDisplay.prepend(cardElement);
};

initialCards.forEach((card) => {
  displayCards(createCardElement(card));
});

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupPressingEsc);
  popup.addEventListener("click", closePopupClickingOverlay);
};

function closePopupPressingEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function closePopupClickingOverlay(event) {
  if (event.target === event.currentTarget) {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

const handleAddCardSubmit = (evt) => {
  evt.preventDefault();

  const name = placeInput.value;
  const link = linkInput.value;

  const cardInfo = {
    name,
    link,
  };

  displayCards(createCardElement(cardInfo));
  closePopup(popupAddCardDisplay);
};

const fillPhotoCloseupPopup = (cardInfo) => {
  photoCloseupLink.src = cardInfo.link;
  photoCloseupLink.alt = cardInfo.name;
  photoCloseupName.textContent = cardInfo.name;
};

formEditProfile.addEventListener("submit", submitEditProfileForm);

buttonClosePopup.addEventListener("click", () => {
  closePopup(popupDisplay);
});

buttonEditProfile.addEventListener("click", openEditProfilePopup);

buttonAddCard.addEventListener("click", () => {
  openPopup(popupAddCardDisplay);
  cardForm.reset();
});

buttonAddCardClose.addEventListener("click", () => {
  closePopup(popupAddCardDisplay);
});

cardForm.addEventListener("submit", handleAddCardSubmit);

popupCloseupPhotoCloseButton.addEventListener("click", () => {
  closePopup(popupCloseupPhotoDisplay);
});
