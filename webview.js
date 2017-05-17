function customConfirm(event) {
  const {dialog} = require('electron').remote;

  const userChoice = dialog.showMessageBox(
    {
      message: 'Do you want to leave?',
      buttons: ['Leave', 'Stay'],
    }
  );

  // dialog.showErrorBox('This has been an error.');
}

window.addEventListener(
  'beforeunload',
  (event) => customConfirm(event)
);

