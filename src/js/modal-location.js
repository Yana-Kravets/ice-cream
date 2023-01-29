(() => {
  const refs = {
    openModalBtn: document.querySelector("[locdata-modal-opening]"),
    closeModalBtn: document.querySelector("[locdata-modal-close]"),
    modal: document.querySelector("[locdata-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("locis-hidden");
  }
})();