(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-now-modal-open]'),
    openModalMobileBtn: document.querySelector('[buy-now-modal-mobile-open]'),
    closeModalBtn: document.querySelector('[buy-now-modal-close]'),
    modal: document.querySelector('[buy-now-modal]'),
    mobileMenu: document.querySelector('.js-mobile-menu'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalMobileBtn.addEventListener('click', toggleModalMobile);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('buy-hidden');
  }
  function toggleModalMobile() {
    refs.modal.classList.toggle('buy-hidden');
    refs.mobileMenu.classList.remove('is-open');
  }
})();
