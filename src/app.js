const text = document.createElement('textarea');
let capLock = false;
let shift = false;
let lang;

function Lang() {if (!sessionStorage.getItem('lang')) {
    sessionStorage.setItem('lang', 'true');
    lang = sessionStorage.getItem('lang');
  } else {
    lang = sessionStorage.getItem('lang');
  }
}
document.addEventListener('DOMContentLoaded', Lang);

const board = document.createElement('div');
board.className = 'board';
const instruction = document.createElement('h2');
const instruction2 = document.createElement('h2');
instruction2.textContent = 'Windows 10';
instruction.textContent = 'Перeключениe языков Ctrl+Shift';
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
document.body.append(instruction2);
document.body.append(instruction);
const arrEn = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  '{',
  '}',
  '|',
  ':',
  '"',
  '<',
  '>',
  '?',
];
const arrRu = [
  'Ё',
  '!',
  '"',
  '№',
  ';',
  '%',
  ':',
  '?',
  '*',
  '(',
  ')',
  '_',
  '+',
  '{',
  '}',
  '/',
  ':',
  '"',
  '<',
  '>',
  ',',
];
const codeAllRu = [
  'ё',
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
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  '\\',
  'Delete',
  'CapsLock',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  'Enter',
  'Shift',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '.',
];
const codeAllEn = [
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
];
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
const arr1En = [
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
  '[',
  ']',
  '\\',
  ';',
  "'",
  ',',
  '.',
  '/',
];
const arr2En = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  '{',
  '}',
  '|',
  ':',
  '"',
  '<',
  '>',
  '?',
];
const arr1Ru = [
  'ё',
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
  'х',
  'ъ',
  '\\',
  'ж',
  'э',
  'б',
  'ю',
  '.',
];
const arr2Ru = [
  'Ё',
  '!',
  '"',
  '№',
  ';',
  '%',
  ':',
  '?',
  '*',
  '(',
  ')',
  '_',
  '+',
  'Х',
  'Ъ',
  '/',
  'Ж',
  'Э',
  'Б',
  'Ю',
  '!',
];

function InsertButtons() {
  let btn = '';
  const alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

  for (let i = 0; i < listSimbols.length; i += 1) {
    if (listSimbols[i] === 'Shift') {
      btn
        += '<div class="btn key long shifter" data-keys="'
        + `${listSimbols[i]}`
        + '">'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (
      listSimbols[i] === 'Backspace'
      || listSimbols[i] === 'Shift'
      || listSimbols[i] === 'CapsLock'
    ) {
      btn
        += '<div class="btn key long" data-keys="'
        + `${listSimbols[i]}`
        + '">'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (listSimbols[i] === 'Enter') {
      btn
        += '<div class="btn key keylong enter" data = "\n" data-keys="'
        + `${listSimbols[i]}`
        + '">'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (listSimbols[i] === ' ') {
     
      btn
        += '<div class="btn key longest"  data-keys="'
        + `${listSimbols[i]}`
        + '"data="'
        + `${listSimbols[i]}"`
        + '>'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (alphabet.includes(listSimbols[i])) {
      btn
        += '<div class="btn key letter"  data-keys="'
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
        += '<div class="btn key" data="\t"  data-keys = "'
        + `${listSimbols[i]}`
        + '">'
        + `${listSimbols[i]}`
        + '</div>';
    } else if (listSimbols[i] === 'Alt') {
      btn
        // eslint-disable-next-line no-useless-concat
        += '<div class="btn key" data-keys ="Alt">'
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
        += '<div class="btn key"  data-keys = "'
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

function VisibleShift() {
  Lang();
  if (lang === 'true') {
    Array.from(document.getElementsByClassName('shift')).forEach((element) => { element.style.display = 'block'; });
    Array.from(document.getElementsByClassName('shift-ru')).forEach((element) => { element.style.display = 'none'; });
  } else if (lang === 'false') {
    Array.from(document.getElementsByClassName('shift-ru')).forEach((element) => { element.style.display = 'block'; });
    Array.from(document.getElementsByClassName('shift')).forEach((element) => { element.style.display = 'none'; });
  }
}
function ShiftCharsInsert() {
  const arr = document.querySelectorAll('.key');
  for (let i = 0; i < 13; i++) {
    arr[i].insertAdjacentHTML(
      'afterbegin',
      '<span class="shift">' + arrEn[i] + '</span>',
    );
    arr[i].insertAdjacentHTML(
      'afterbegin',
      '<span class="shift-ru">' + arrRu[i] + '</span>',
    );
  }
  arr[25].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift">' + arrEn[13] + '</span>',
  );
  arr[25].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift-ru">' + arrRu[13] + '</span>',
  );
  arr[26].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift">' + arrEn[14] + '</span>',
  );
  arr[26].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift-ru">' + arrRu[14] + '</span>',
  );
  arr[27].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift">' + arrEn[15]+ '</span>',
  );
  arr[27].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift-ru">' + arrRu[15] + '</span>',
  );
  arr[39].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift">' + arrEn[16] + '</span>',
  );
  arr[39].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift-ru">' + arrRu[16] + '</span>',
  );
  arr[40].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift">' + arrEn[17] + '</span>',
  );
  arr[40].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift-ru">' + arrRu[17] + '</span>',
  );
  arr[50].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift">' + arrEn[18] + '</span>',
  );
  arr[50].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift-ru">' + arrRu[18] + '</span>',
  );
  arr[51].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift">' + arrEn[19] + '</span>',
  );
  arr[51].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift-ru">' + arrRu[19] + '</span>',
  );
  arr[52].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift">' + arrEn[20] + '</span>',
  );
  arr[52].insertAdjacentHTML(
    'afterbegin',
    '<span class="shift-ru">' + arrRu[20] + '</span>',
  );
}

function langChange(e) {
  Lang();
  if (e.ctrlKey && e.shiftKey && lang === 'true') {
    for (let i = 0; i < codeAllRu.length; i++) {
      if (
        board.querySelectorAll('[data-keys]')[i].hasAttribute('data')
        && board.querySelectorAll('[data-keys]')[i].getAttribute('data')
          !== '\n'
        && board.querySelectorAll('[data-keys]')[i].getAttribute('data') !== '\t'
      ) {
        board.querySelectorAll('[data-keys]')[i].textContent = codeAllRu[i];
        board.querySelectorAll('[data-keys]')[i].removeAttribute('data');
        board
          .querySelectorAll('[data-keys]')[i].setAttribute('data', `${codeAllRu[i]}`);
        board.querySelectorAll('[data-keys]')[i].dataset.keys = codeAllRu[i];
      }
    }
    ShiftCharsInsert();

    sessionStorage.setItem('lang', 'false');
    VisibleShift();
  } else if (e.ctrlKey && e.shiftKey && lang === 'false') {
    for (let i = 0; i < codeAllEn.length; i++) {
      if (board.querySelectorAll('[data-keys]')[i].hasAttribute('data') && board.querySelectorAll('[data-keys]')[i].getAttribute('data')
      !== '\n'
    && board.querySelectorAll('[data-keys]')[i].getAttribute('data') !== '\t') {
        board.querySelectorAll('[data-keys]')[i].removeAttribute('data');
        board
          .querySelectorAll('[data-keys]')[i].setAttribute('data', `${codeAllEn[i]}`);
        board.querySelectorAll('[data-keys]')[i].dataset.keys = codeAllEn[i];
        board.querySelectorAll('[data-keys]')[i].textContent = codeAllEn[i];
      }
    }

    ShiftCharsInsert();

    sessionStorage.setItem('lang', 'true');
    VisibleShift();
  }
}

document.addEventListener('keydown', langChange);
// символы shift

// Shift

function ShiftActivity(e) {
  if (e.target.textContent === 'Shift') {
    shift = true;
  }
}

function ShiftActivityOf(e) {
  if (e.target.textContent === 'Shift') {
    shift = false;
  }
}
function ShiftActivity2(e) {
  if (e.key === 'Shift') {
    shift = true;
  }
}
function ShiftActivityOf2(e) {
  if (e.key === 'Shift') {
    shift = false;
  }
}
document.addEventListener('mousedown', ShiftActivity);
document.addEventListener('mouseup', ShiftActivityOf);
document.addEventListener('keydown', ShiftActivity2);
document.addEventListener('keyup', ShiftActivityOf2);

InsertButtons();
ShiftCharsInsert();
VisibleShift();

function SetLang() {
  Lang();

  if (lang === 'false') {
    for (let i = 0; i < codeAllRu.length; i++) {
      if (
        board.querySelectorAll('[data-keys]')[i].hasAttribute('data')
        && board.querySelectorAll('[data-keys]')[i].getAttribute('data')
          !== '\n'
        && board.querySelectorAll('[data-keys]')[i].getAttribute('data') !== '\t'
      ) {
        board.querySelectorAll('[data-keys]')[i].textContent = codeAllRu[i];
        board.querySelectorAll('[data-keys]')[i].removeAttribute('data');
        board
          .querySelectorAll('[data-keys]')[i].setAttribute('data', `${codeAllRu[i]}`);
        board.querySelectorAll('[data-keys]')[i].dataset.keys = codeAllRu[i];
      }
    }
    ShiftCharsInsert();
    VisibleShift();
  } else if (lang === 'true') {
    for (let i = 0; i < codeAllEn.length; i++) {
      if (board.querySelectorAll('[data-keys]')[i].hasAttribute('data') && board.querySelectorAll('[data-keys]')[i].getAttribute('data')
      !== '\n'
    && board.querySelectorAll('[data-keys]')[i].getAttribute('data') !== '\t') {
        board.querySelectorAll('[data-keys]')[i].removeAttribute('data');
        board
          .querySelectorAll('[data-keys]')[i].setAttribute('data', `${codeAllEn[i]}`);
        board.querySelectorAll('[data-keys]')[i].dataset.keys = codeAllEn[i];
        board.querySelectorAll('[data-keys]')[i].textContent = codeAllEn[i];
      }
    }
    ShiftCharsInsert();
    VisibleShift();
  }
}

document.addEventListener('DOMContentLoaded', SetLang);

// подсветка кнопок
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
document.addEventListener('keydown', KeyDown);

document.addEventListener('keyup', (e) => {
  if (e.key === 'CapsLock' && !capLock) {
    capLock = true;
    return;
  }
  if (e.key === 'CapsLock' && capLock) {
    capLock = false;
  }
});

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

// печать
document.addEventListener('click', (e) => {
  if (e.target.textContent === 'CapsLock' && !capLock) {
    capLock = true;
    e.target.classList.add('active');
  } else if (e.target.textContent === 'CapsLock' && capLock) {
    capLock = false;
    e.target.classList.remove('active');
  }
  return capLock;
});

let CaretPos = 0;
function print(event) {
  let target = event.target.getAttribute('data');
  if (target !== null && !capLock && !shift) {
    text.textContent = text.textContent.slice(0, CaretPos)
      + target
      + text.textContent.slice(CaretPos, text.textContent.length);
    text.value = text.textContent;
    CaretPos++;
  } else if (
    target !== null
    && (capLock || shift)
    && !event.target.children.length
  ) {
    target = event.target.getAttribute('data');
    text.textContent = text.textContent.slice(0, CaretPos)
      + target.toUpperCase()
      + text.textContent.slice(CaretPos, text.textContent.length);
    text.value = text.textContent;
    CaretPos++;
  } else if (shift && lang === 'true' && event.target.children.length) {
    target = event.target.children[1].textContent;
    text.textContent = text.textContent.slice(0, CaretPos)
      + target
      + text.textContent.slice(CaretPos, text.textContent.length);
    text.value = text.textContent;
    CaretPos++;
  } else if (shift && lang === 'false' && event.target.children.length) {
    target = event.target.children[0].textContent;
    text.textContent = text.textContent.slice(0, CaretPos)
      + target
      + text.textContent.slice(CaretPos, text.textContent.length);
    text.value = text.textContent;
    CaretPos++;
  } else if (target !== null && (capLock || shift)) {
    text.textContent = text.textContent.slice(0, CaretPos) + target.toUpperCase() + (text.textContent.slice(CaretPos, text.textContent.length));

    text.value = text.textContent;
    CaretPos++;
  }
}
function printKey(event) {
  let target = event.key;
  if (shift && lang === 'true') {
    for (let i = 0; i < arr1En.length; i++) {
      if (event.key === arr1En[i]) {
        target = arr2En[i];
      }
    }
  } else if (shift && lang === 'false') {
    for (let i = 0; i < arr1Ru.length; i++) {
      if (event.key === arr1Ru[i]) {
        target = arr2Ru[i];
      }
    }
  }

  const list = [
    'Backspace',
    'Control',
    'Alt',
    'Delete',
    'Enter',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
    'ArrowUp',
    'CapsLock',
    'Shift',
    'Tab',
    'Meta',
    'F12',
    'F11',
    'F12',
    'F10',
    'F9',
    'F8',
    'F7',
    'F6',
    'F5',
    'F4',
    'F3',
    'F2',
    'F1',
    'Escape',
    'PageDown',
    'PageUp',
    'Insert',
    'Home',
    'End',
    'NumLock',
    'Pause',
    'ScrollLock',
    'PrintScreen',
    'AltGraph',
  ];
  if (list.indexOf(target) === -1 && !capLock && !shift) {
    // eslint-disable-next-line max-len
    text.textContent = text.textContent.slice(0, CaretPos)
      + target
      + text.textContent.slice(CaretPos, text.textContent.length);
    text.value = text.textContent;
    CaretPos++;
  } else if (
    list.indexOf(target) === -1
    && (capLock || shift)
    && arr1En.indexOf(target) === -1
    && arr1Ru.indexOf(target) === -1
  ) {
    text.textContent = text.textContent.slice(0, CaretPos)
      + target.toUpperCase()
      + text.textContent.slice(CaretPos, text.textContent.length);
    text.value = text.textContent;
    CaretPos++;
  } else if (list.indexOf(target) !== -1 && target === 'Enter') {
    text.innerHTML += '\n';
    CaretPos++;
  } else if (list.indexOf(target) !== -1 && target === 'Tab') {
    text.innerHTML += '\t';
    CaretPos++;
  }
}

text.onclick = () => {
  CaretPos = text.selectionStart = text.selectionEnd;
};

//  Backspace
function Backspace(e) {
  const target = e.target.textContent;

  if (target === 'Backspace' && CaretPos === text.textContent.length) {
    text.textContent = text.textContent.slice(0, CaretPos - 1);
    text.value = text.textContent;
    CaretPos=-1;
  } else if (target === 'Backspace' && CaretPos !== text.textContent.length) {
    if (CaretPos === 0) {
      return;
    }

    text.textContent = text.textContent.slice(0, CaretPos - 1)
      + text.textContent.slice(CaretPos, text.textContent.length);
    text.value = text.textContent;
    CaretPos=-1;
  } else if (target === 'Delete' && CaretPos !== text.textContent.length) {
    text.textContent = text.textContent.slice(0, CaretPos)
      + text.textContent.slice(CaretPos + 1, text.textContent.length);
    text.value = text.textContent;
  }
}

function Backspace2(e) {
  const target = e.key;

  if (
    target === 'Backspace'
    && CaretPos === text.textContent.length
    && CaretPos !== 0
  ) {
    text.textContent = text.textContent.slice(0, CaretPos - 1);
    text.value = text.textContent;

    CaretPos--;
  } else if (
    target === 'Backspace'
    && CaretPos !== text.textContent.length
    && CaretPos !== 0
  ) {
    text.textContent = text.textContent.slice(0, CaretPos - 1)
      + text.textContent.slice(CaretPos, text.textContent.length);
    text.value = text.textContent;
    --CaretPos;
  }
}
document.addEventListener('keyup', Backspace2);
board.addEventListener('click', Backspace);
document.addEventListener('keyup', printKey);
board.addEventListener('mouseup', print);
