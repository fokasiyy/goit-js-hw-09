const form = document.querySelector('.js-feedback-form');
const input = document.querySelector('.js-input');
const textarea = document.querySelector('.js-textarea');

const formData = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  const LSData = JSON.parse(localStorage.getItem('feedback-form-state'));

  input.value = LSData.email || '';
  textarea.value = LSData.message || '';
  formData.email = LSData.email || '';
  formData.message = LSData.message || '';
}

form.addEventListener('input', e => {
  formData.email = e.currentTarget.elements.email.value.trim();
  formData.message = e.currentTarget.elements.message.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  input.value = '';
  textarea.value = '';
});