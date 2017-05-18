// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const webview = document.querySelector('webview');
const {dialog} = require('electron').remote;

webview.src=`file://${__dirname}/webview-src.html`;

webview.addEventListener('dom-ready', () => {
  setupPreventUnloadHandler();
});

function setupPreventUnloadHandler() {
  const contents = webview.getWebContents();

  contents.on('will-prevent-unload', (event) => {
    const choice = dialog.showMessageBox({
      type: 'question',
      buttons: ['Leave', 'Stay'],
      title: 'Do you want to leave this site?',
      message: 'Changes you made may not be saved.',
      defaultId: 0,
      cancelId: 1
    });
    if (choice === 0) {
      event.preventDefault(); // Should allow navigation, but doesn't.
    }
  });
}
