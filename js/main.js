const dialog = document.querySelector('#order-dialog');
const form = document.querySelector('#order-form');
const message = document.querySelector('#success-message');

if (dialog) {
  const selectedProduct = document.querySelector('#selected-product');
  const closeButton = document.querySelector('#close-order-dialog');

  document.querySelectorAll('[data-product]').forEach(button => {
    button.addEventListener('click', () => {
      selectedProduct.textContent = button.dataset.product;
      message.hidden = true;
      dialog.showModal();
    });
  });

  closeButton.addEventListener('click', () => dialog.close());
}

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
    if (dialog) dialog.close();
    message.hidden = false;
  });

  form.addEventListener('reset', () => {
    message.hidden = true;
  });
}
