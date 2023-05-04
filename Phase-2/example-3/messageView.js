class MessageView {
  constructor() {
    this.clickMeButtonEl = document.querySelector('#show-message-button');
    this.hideMessageButton = document.querySelector('#hide-message-button');

    this.clickMeButtonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    this.hideMessageButton.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const messsageEl = document.createElement('div');
    messsageEl.id = 'message';
    messsageEl.innerText = 'This message displayed by JavaScript';
    document.querySelector('#main-container').append(messsageEl);

    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    const removeEl = document.querySelector('#message');
    // making sure that there is an element to remove before removing it
    if (removeEl !== null) {
      removeEl.remove();
    }
  }
}

module.exports = MessageView;
