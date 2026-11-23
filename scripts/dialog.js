const saveButton = document.querySelector('.save-button');
const saveDialog = document.querySelector('#save-dialog');

saveButton.addEventListener('click', () => {
  saveDialog.showModal();
});

saveDialog.addEventListener('click', (event) => {
  if (event.target === saveDialog) {
    event.preventDefault();
  }
});
