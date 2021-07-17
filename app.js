const signUpButton = document.getElementById("sign-up-button");
const signUpFormModal = document.getElementById("sign-up-form-modal");
const signUpForm = document.getElementById("sign-up-form-container");
const modalOverlay = document.getElementById("modal-overlay");
const closeModalBtn = document.getElementById("close-modal-btn");

const addModalHandler = () => {
  signUpFormModal.classList.remove("hidden");
  signUpFormModal.classList.add("flex");
  modalOverlay.classList.remove("hidden");
  signUpForm.classList.add("slide-in");
};

const removeModalHandler = () => {
  signUpFormModal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
};

signUpButton.addEventListener("click", addModalHandler);
modalOverlay.addEventListener("click", removeModalHandler);
closeModalBtn.addEventListener("click", removeModalHandler);

document.querySelector("video").play();
