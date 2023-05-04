class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });
  }

  displayMessage() {
    const messsageEl = document.createElement('div');
    messsageEl.id = 'message';
    messsageEl.innerText = 'This message displayed by JavaScript';
    document.querySelector('#main-container').append(messsageEl);

    console.log('Thanks for clicking me!');
  }
}

module.exports = MessageView;
