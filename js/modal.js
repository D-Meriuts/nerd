const contactsBtn = document.querySelector('.contacts__btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const login = modal.querySelector('[name=name]');


contactsBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('shown');
  login.focus();
});

modalClose.addEventListener('click', function () {
  modal.classList.remove('shown')
});

