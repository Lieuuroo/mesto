const showInputError = (config, form, inputElement, errorMessage) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (config, form, inputElement) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (config, form, inputElement) => {
  if (inputElement.checkValidity()) {
    hideInputError(config, form, inputElement);
  } else {
    showInputError(config, form, inputElement, inputElement.validationMessage);
  }
};

const disableButton = (config, button) => {
  button.setAttribute("disabled", "");
  button.classList.add(config.inactiveButtonClass);
};

const enableButton = (config, button) => {
  button.removeAttribute("disabled");
  button.classList.remove(config.inactiveButtonClass);
};

const toggleButtonValidity = (config, form) => {
  const buttonSave = form.querySelector(config.submitButtonSelector);

  if (form.checkValidity()) {
    enableButton(config, buttonSave);
  } else {
    disableButton(config, buttonSave);
  }
};

const setEventListeners = (config, form) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(config, form, inputElement);
      toggleButtonValidity(config, form);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    toggleButtonValidity(config, form);
    setEventListeners(config, form);
  });
};

enableValidation({
  formSelector: ".popup__form-imput-container",
  inputSelector: ".popup__form-item",
  submitButtonSelector: ".popup__form-save-button",
  inactiveButtonClass: "popup__form-save-button_disabled",
  inputErrorClass: "popup__form-item_invalid",
  errorClass: "popup__form-error-message_active",
});
