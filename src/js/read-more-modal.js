(() => {
  const refs = {
    openModalBtn: document.querySelector('[readmodal-opening]'),
    closeModalBtn: document.querySelector('[readmodal-close]'),
    modal: document.querySelector('[read-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('read-is-hidden');
  }
})();
