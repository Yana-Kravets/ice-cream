(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients-modal-open-first]"),
    closeModalBtn: document.querySelector("[ingredients-modal-close-first]"),
    modal: document.querySelector("[ingredients-modal-first]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("ingredients-hidden-first");
  }
})();