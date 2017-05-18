const {dialog} = require('electron');

function unloadCB(event) {
  const choice = dialog.showMessageBox({
    type: 'question',
    buttons: ['Leave', 'Stay'],
    title: 'Do you want to leave this site?',
    message: 'Changes you made may not be saved.',
    defaultId: 0,
    cancelId: 1
  });

  if (choice === 0) {
    event.preventDefault();
  }
};

exports.setupPreventUnloadHandler = (contents) => {
  contents.on('will-prevent-unload', unloadCB);
}


