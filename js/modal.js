const contactsBtn = document.querySelector('.contacts__btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const login = modal.querySelector('[name=name]');
const form = modal.querySelector('form');
const email = modal.querySelector('[name=email]');
let storage = localStorage.getItem('login');

let isStorageSupport = true;
storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

contactsBtn.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

modalClose.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (modal.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
      modal.classList.remove('modal-error');
    }
  }
});

form.addEventListener('submit', function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport){
      localStorage.setItem("name", login.value);
    }
  }
});
