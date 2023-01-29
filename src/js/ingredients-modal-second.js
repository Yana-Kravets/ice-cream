(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients-modal-open-second]"),
    closeModalBtn: document.querySelector("[ingredients-modal-close-second]"),
    modal: document.querySelector("[ingredients-modal-second]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("ingredients-hidden-second");
  }
})();