/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  let view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    view = new View();
  });

  it('displays 2 paragraphs', () => {
    expect(document.querySelectorAll('p').length).toBe(2);
  });
  it('adds a new paragraph to the web page', () => {
    view.addParagraph();
    expect(document.querySelectorAll('p').length).toBe(3);
  });
  it('removes all paragraphs from the document', () => {
    view.clearParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0);
  });
});
