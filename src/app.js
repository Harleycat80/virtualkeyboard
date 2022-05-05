const text = document.createElement('textarea');
let capLock = false;
const shift = false;
const board = document.createElement('div');
board.className = 'board';

function InsertTextArea() {
  text.className = 'text';
  text.setAttribute('autofocus', 'true');
  text.setAttribute('rows', '20');
  text.setAttribute('cols', '100');
  text.setAttribute('name', 'display');
  text.setAttribute('id', 'textinput');

  document.body.prepend(board);
  document.body.prepend(text);
}
InsertTextArea();

function InsertTitle() {
  const title = document.createElement('h1');
  title.textContent = 'Virtual KeyBoard';
  document.body.prepend(title);
}
InsertTitle();

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
  'Delete',
  'CapsLock',
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
  'ArrowUp',
  'Shift',
  'Control',
  'Meta',
  'Alt',
  ' ',
  'Alt',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'Control',
];

function InsertButtons() {
  let btn = '';
  const alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

  for (let i = 0; i < listSimbols.length; i += 1) {
    if (
      listSimbols[i] === 'Backspace'
      || listSimbols[i] === 'Shift'
      || listSimbols[i] === 'CapsLock'
      || listSimbols[i] === 'Shift'
    ) {
      btn
        += '<div class="btn long" data-keys="'
        + `${listSimbols[i]}`
        + '">'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (listSimbols[i] === 'Enter') {
      btn
        += '<div class="btn long enter" data-keys="'
        + `${listSimbols[i]}`
        + '">'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (listSimbols[i] === ' ') {
      btn
        += '<div class="btn longest"  data-keys="'
        + `${listSimbols[i]}`
        + '"data="'
        + `${listSimbols[i]}"`
        + '>'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (alphabet.includes(listSimbols[i])) {
      btn
        += '<div class="btn key"  data-keys="'
        + `${listSimbols[i]}`
        + '" data="'
        + `${listSimbols[i]}"`
        + '>'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (listSimbols[i] === 'Meta') {
      btn
        += '<div class="btn key" data-keys="'
        + `${listSimbols[i]}`
        + '">'
        + 'Win'
        + '</div>';
    } else if (listSimbols[i] === 'Delete') {
      btn
      += '<div class="btn key" data-keys="'
      + `${listSimbols[i]}`
      + '">'
      + 'Delete'
      + '</div>';
    } else if (listSimbols[i] === 'Control') {
      btn
        += '<div class="btn key" data-keys="'
        + `${listSimbols[i]}`
        + '">'
        + 'Ctrl'
        + '</div>';
    } else if (listSimbols[i] === 'Tab') {
      btn
        += '<div class="btn" data="    "  data-keys = "'
        + `${listSimbols[i]}`
        + '">'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (listSimbols[i] === 'Alt') {
      btn
        += '<div class="btn" data-keys ="Alt">'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (listSimbols[i] === 'ArrowUp') {
      btn
        += '<div class="btn key" data-keys="'
        + `${listSimbols[i]}"`
        + ' data="&uarr;">'
        + '&uarr;'
        + '</div>';
    } else if (listSimbols[i] === 'ArrowLeft') {
      btn
        += '<div class="btn key" data-keys="'
        + `${listSimbols[i]}"`
        + ' data="&larr;">'
        + '&larr;'
        + '</div>';
    } else if (listSimbols[i] === 'ArrowRight') {
      btn
        += '<div class="btn key" data-keys="'
        + `${listSimbols[i]}"`
        + ' data="&rarr;">'
        + '&rarr;'
        + '</div>';
    } else if (listSimbols[i] === 'ArrowDown') {
      btn
        += '<div class="btn key"  data-keys="'
        + `${listSimbols[i]}"`
        + ' data="&darr;">'
        + '&darr;'
        + '</div>';
    } else {
      btn
        += '<div class="btn"  data-keys = "'
        + `${listSimbols[i]}`
        + '"data="'
        + `${listSimbols[i]}"`
        + '>'
        + `${listSimbols[i]}`
        + '</div>';
    }
    board.innerHTML = btn;
  }
}

InsertButtons();

function KeyDown(e) {
  const target = e.key;

  const I = Array.from(board.querySelectorAll('[data-keys]'));
  for (let i = 0; i < I.length; i += 1) {
    if (I[i].dataset.keys === target && I[i].dataset.keys !== 'CapsLock') {
      I[i].classList.add('active');
    } else if (
      I[i].dataset.keys === target
      && I[i].dataset.keys === 'CapsLock'
    ) {
      I[i].classList.add('active');
    }
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'CapsLock' && !capLock) {
    capLock = true;
    return;
  } if (e.key === 'CapsLock' && capLock) {
    capLock = false;
  }
});

document.addEventListener('keydown', KeyDown);

function KeyUp(e) {
  const target = e.key;
  const I = Array.from(board.querySelectorAll('[data-keys]'));
  for (let i = 0; i < I.length; i += 1) {
    if (I[i].dataset.keys === target && I[i].dataset.keys !== 'CapsLock') {
      I[i].classList.remove('active');
    } else if (
      I[i].dataset.keys === target
      && I[i].dataset.keys === 'CapsLock'
      && !capLock
    ) {
      I[i].classList.remove('active');
    }
  }
}

document.addEventListener('keyup', KeyUp);

document.addEventListener('keydown', (e) => {
  const list = ['Tab', 'Meta'];
  if (list.indexOf(e.key) !== -1) {
    e.preventDefault();
  }
});

document.addEventListener('click', (e) => {
  if (e.target.textContent === 'CapsLock' && !capLock) {
    capLock = true;
  } else if (e.target.textContent === 'CapsLock' && capLock) {
    capLock = false;
  }
  return capLock;
});
/* const textinput = document.getElementById('textinput'); */

function print(event) {
  const target = event.target.getAttribute('data');

  if (target !== null && !capLock) {
    text.textContent += target;
  } else if (target !== null && capLock) {
    text.textContent += target.toUpperCase();
  } else if (target === 'Backspace') {
    text.textContent = text.textContent.slice(0, text.textContent.length - 1);
  }
}
function printKey(event) {
  const target = event.key;
  const list = ['Backspace', 'Control', 'Alt', 'Delete', 'Enter', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'CapsLock', 'Shift', 'Tab', 'Meta'];
  if (list.indexOf(target) === -1) {
    text.textContent += target;
  } else if (target === 'Backspace') {
    text.textContent = text.textContent.slice(0, text.textContent.length - 1);
  }
}

function Backspace(e) {
  const target = e.target.textContent;

  if (target === 'Backspace') {
    text.textContent = text.textContent.slice(0, text.textContent.length - 1);
  }
}
function Backspace2(e) {
  const target = e.key;
  if (target === 'Backspace') {
    text.textContent = text.textContent.slice(0, text.textContent.length);
  }
}
document.addEventListener('keydown', Backspace2);
document.addEventListener('click', Backspace);
document.addEventListener('keydown', printKey);
document.addEventListener('click', print);
