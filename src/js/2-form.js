const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

loadFormData();

formEl.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (email === '' || message === '') {
    alert('Please fill in all fields!');
    return;
  }

  console.log('Form submitted:', { email, message });

  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
});

function loadFormData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  if (savedData.email) {
    emailInput.value = savedData.email;
    formData.email = savedData.email;
  }

  if (savedData.message) {
    messageInput.value = savedData.message;
    formData.message = savedData.message;
  }
}
