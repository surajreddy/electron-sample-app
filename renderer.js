// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const webview = document.querySelector('webview');
const {remote} = require('electron');
const {dialog} = remote;
const remoteImport = remote.require('./unload-callback');

webview.src=`file://${__dirname}/webview-src.html`;

webview.addEventListener('dom-ready', () => {
  const contents = webview.getWebContents();
  remoteImport.setupPreventUnloadHandler(contents);
});

// function setupPreventUnloadHandler() {
//   const contents = webview.getWebContents();

//   contents.on('will-prevent-unload', remoteImport.unloadCB);
// }
