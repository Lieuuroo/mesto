const editButton = document.querySelector(".profile__edit-button");
const popupDisplay = document.querySelector(".popup_type_edit-profile");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const closeButton = document.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__form-imput-container");
const nameInput = document.querySelector(".popup__form-item_el_name");
const jobInput = document.querySelector(".popup__form-item_el_job");
const placeInput = document.querySelector(".popup__form-item_el_place");
const linkInput = document.querySelector(".popup__form-item_el_link");
const cardsTemplate = document.querySelector("#cards");
const cardsDisplay = document.querySelector(".cards");
const addButton = document.querySelector(".profile__add-button");
const popupAddCardDisplay = document.querySelector(".popup_type_add-card");
const closeButtonAddCard = popupAddCardDisplay.querySelector(
  ".popup__close-button"
);
const addCardForm = document.querySelector(
  ".popup__form-imput-container_type_add-card"
);
const popupCloseupPhotoDisplay = document.querySelector(
  ".popup_type_photo-closeup"
);
const popupCloseupPhotoCloseButton = popupCloseupPhotoDisplay.querySelector(
  ".popup__close-button"
);

function openEditProfilePopup() {
  openPopup(popupDisplay);
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubtitle.textContent;
}

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInput.getAttribute("value");
  jobInput.getAttribute("value");

  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup(popupDisplay);
}

formElement.addEventListener("submit", handleFormSubmit);
closeButton.addEventListener("click", () => {
  closePopup(popupDisplay);
});
editButton.addEventListener("click", openEditProfilePopup);

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
    photoCloseup(cardInfo);
  });

  return cardElement;
};

const displayCards = (cardElement) => {
  cardsDisplay.prepend(cardElement);
};

initialCards.forEach((card) => {
  displayCards(createCardElement(card));
});

addButton.addEventListener("click", () => {
  openPopup(popupAddCardDisplay);
  addCardForm.reset();
});

closeButtonAddCard.addEventListener("click", () => {
  closePopup(popupAddCardDisplay);
});

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

const handleAddCardSubmit = (evt) => {
  evt.preventDefault();

  const placeInput = addCardForm.querySelector(".popup__form-item_el_place");
  const linkInput = addCardForm.querySelector(".popup__form-item_el_link");

  const name = placeInput.value;
  const link = linkInput.value;

  const cardInfo = {
    name,
    link,
  };

  displayCards(createCardElement(cardInfo));
  closePopup(popupAddCardDisplay);
};

addCardForm.addEventListener("submit", handleAddCardSubmit);

popupCloseupPhotoCloseButton.addEventListener("click", () => {
  closePopup(popupCloseupPhotoDisplay);
});

const photoCloseup = (cardInfo) => {
  const closeupPhotoLink = popupCloseupPhotoDisplay.querySelector(
    ".popup__closeup-photo"
  );
  const closeupName = popupCloseupPhotoDisplay.querySelector(
    ".popup__closeup-location"
  );

  closeupPhotoLink.src = cardInfo.link;
  closeupPhotoLink.alt = cardInfo.name;
  closeupName.textContent = cardInfo.name;
};