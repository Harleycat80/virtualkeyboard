function InsertTitle() {
  const title = document.createElement('h1');
  title.textContent = 'Virtual KeyBoard';
  document.body.append(title);
}

document.addEventListener('DOMContentLoaded', InsertTitle);
const text = document.createElement('textarea');

const board = document.createElement('div');
board.className = 'board';

function InsertTextArea() {
  text.className = 'text';
  text.setAttribute('autofocus', 'true');
  text.setAttribute('rows', '20');
  text.setAttribute('cols', '100');
  text.setAttribute('name', 'display');
  document.body.append(text);

  document.body.append(board);
}
document.addEventListener('DOMContentLoaded', InsertTextArea);

const listSimbols = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'Del',
  'Caps Lock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'Up',
  'Shift',
  'Ctrl',
  'WIN',
  'Alt',
  ' ',
  'Alt',
  'Left',
  'Down',
  'Right',
  'Ctrl',
];

function InsertButtons() {
  let btn = '';
  const alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

  for (let i = 0; i < listSimbols.length; i += 1) {
    if (
      listSimbols[i] === 'Backspace'
      || listSimbols[i] === 'Shift'
      || listSimbols[i] === 'Caps Lock'
    ) {
      btn
        += '<div class="btn long" data="'
        + `${listSimbols[i]}"`
        + '>'
        + '<span class = "inner">'
        + `${listSimbols[i]}`
        + '</span>'
        + '</div>';
    } else if (listSimbols[i] === 'Enter') {
      btn
        += '<div class="btn long enter">'
        + '<span class = "inner">'
        + `${listSimbols[i]}`
        + '</span>'
        + '</div>';
    } else if (listSimbols[i] === ' ') {
      btn
        += '<div class="btn longest" data="'
        + `${listSimbols[i]}"`
        + '>'
        + '<span class = "inner">'
        + `${listSimbols[i]}`
        + '</span>'
        + '</div>';
    } else if (alphabet.includes(listSimbols[i])) {
      btn
        += '<div class="btn key" data="'
        + `${listSimbols[i]}"`
        + '>'
        + '<span class = "inner">'
        + `${listSimbols[i]}`
        + '</span>'
        + '</div>';
    } else {
      btn
        += '<div class="btn" data="'
        + `${listSimbols[i]}"`
        + '>'
        + '<span class = "inner">'
        + `${listSimbols[i]}`
        + '</span>'
        + '</div>';
    }
    board.innerHTML = btn;
  }
}
document.addEventListener('DOMContentLoaded', InsertButtons);

function print(event) {
  const target = event.target.closest('.btn').getAttribute('data');
  if (target !== null) {
    text.textContent += target;
  }
}
board.addEventListener('click', print);
