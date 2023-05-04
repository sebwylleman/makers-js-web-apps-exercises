class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });
  }

  displayMessage() {
    const newDiv = document.createElement('div');
    newDiv.id = 'message';
    newDiv.innerText = 'This message displayed by JavaScript';
    document.querySelector('#main-container').append(newDiv);

    console.log('Thanks for clicking me!');
  }
}

module.exports = MessageView;
