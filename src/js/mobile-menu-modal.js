(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-op]'),
    closeMenuBtn: document.querySelector('[data-menu-cl]'),
    menu: document.querySelector('[data-me]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();
