(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients-modal-open-third]"),
    closeModalBtn: document.querySelector("[ingredients-modal-close-third]"),
    modal: document.querySelector("[ingredients-modal-third]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("ingredients-hidden-third");
  }
})();