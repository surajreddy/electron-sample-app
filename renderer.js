// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const webview = document.querySelector('webview');
const {dialog} = require('electron').remote;

webview.src=`file://${__dirname}/webview-src.html`;

webview.addEventListener('dom-ready', () => {
  // webview.openDevTools(); // Opening dev tools makes showMessageBox block;
});
