window.addEventListener(
  'beforeunload',
  (event) => {
    const userChoice = confirm('Are you sure you want to navigate away?');
    event.returnValue = 'stop navigation'; // Should stop navigation, but doesn't after calling confirm.
  }
);
