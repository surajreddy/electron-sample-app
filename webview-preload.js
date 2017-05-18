const {dialog} = require('electron').remote;

function confirmNavigation() {
  const choice = dialog.showMessageBox({
    type: 'question',
    buttons: ['Leave', 'Stay'],
    title: 'Do you want to leave this site?',
    message: 'Changes you made may not be saved.',
    defaultId: 0,
    cancelId: 1
  }); // Should block navigation, but doesn't.

  return choice === 0;
}

window.addEventListener(
  'beforeunload',
  (event) => {
    confirmNavigation(); // should block, but doesn't
    event.returnValue = 'stop navigation'; // should stop navigation, but doesn't if called after calling showMessageBox.
  }
);
