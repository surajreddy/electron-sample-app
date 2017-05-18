window.addEventListener(
  'beforeunload',
  (event) => {
    event.returnValue = 'stop navigation';
  }
);
