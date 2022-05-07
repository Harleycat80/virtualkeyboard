const text = document.createElement("textarea");
let capLock = false;
const shift = false;
let lang= true
const board = document.createElement("div");
board.className = "board";

function InsertTextArea() {
  text.className = "text";
  text.setAttribute("autofocus", "true");
  text.setAttribute("rows", "20");
  text.setAttribute("cols", "100");
  text.setAttribute("name", "display");
  text.setAttribute("id", "textinput");

  document.body.prepend(board);
  document.body.prepend(text);
}
InsertTextArea();

function InsertTitle() {
  const title = document.createElement("h1");
  title.textContent = "Virtual KeyBoard";
  document.body.prepend(title);
}
InsertTitle();

const listSimbols = [
  '`',
  '1',
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Delete",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "ArrowUp",
  "Shift",
  "Control",
  "Meta",
  "Alt",
  " ",
  "Alt",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "Control",
];

function InsertButtons() {
  let btn = "";
  const alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

  for (let i = 0; i < listSimbols.length; i += 1) {
    if (
      listSimbols[i] === "Backspace" ||
      listSimbols[i] === "Shift" ||
      listSimbols[i] === "CapsLock" ||
      listSimbols[i] === "Shift"
    ) {
      btn +=
        '<div class="btn long" data-keys="' +
        `${listSimbols[i]}` +
        '">' +
        `${listSimbols[i]}` +
        "</div>";
    } else if (listSimbols[i] === "Enter") {
      btn +=
        '<div class="btn long enter" data = "\n" data-keys="' +
        `${listSimbols[i]}` +
        '">' +
        `${listSimbols[i]}` +
        "</div>";
    } else if (listSimbols[i] === " ") {
      btn +=
        '<div class="btn longest"  data-keys="' +
        `${listSimbols[i]}` +
        '"data="' +
        `${listSimbols[i]}"` +
        ">" +
        `${listSimbols[i]}` +
        "</div>";
    } else if (alphabet.includes(listSimbols[i])) {
      btn +=
        '<div class="btn key"  data-keys="' +
        `${listSimbols[i]}` +
        '" data="' +
        `${listSimbols[i]}"` +
        ">" +
        `${listSimbols[i]}` +
        "</div>";
    } else if (listSimbols[i] === "Meta") {
      btn +=
        '<div class="btn key" data-keys="' +
        `${listSimbols[i]}` +
        '">' +
        "Win" +
        "</div>";
    } else if (listSimbols[i] === "Delete") {
      btn +=
        '<div class="btn key" data-keys="' +
        `${listSimbols[i]}` +
        '">' +
        "Delete" +
        "</div>";
    } else if (listSimbols[i] === "Control") {
      btn +=
        '<div class="btn key" data-keys="' +
        `${listSimbols[i]}` +
        '">' +
        "Ctrl" +
        "</div>";
    } else if (listSimbols[i] === "Tab") {
      btn +=
        '<div class="btn" data="\t"  data-keys = "' +
        `${listSimbols[i]}` +
        '">' +
        `${listSimbols[i]}` +
        "</div>";
    } else if (listSimbols[i] === "Alt") {
      btn +=
        '<div class="btn" data-keys ="Alt">' + `${listSimbols[i]}` + "</div>";
    } else if (listSimbols[i] === "ArrowUp") {
      btn +=
        '<div class="btn key" data-keys="' +
        `${listSimbols[i]}"` +
        ' data="&uarr;">' +
        "&uarr;" +
        "</div>";
    } else if (listSimbols[i] === "ArrowLeft") {
      btn +=
        '<div class="btn key" data-keys="' +
        `${listSimbols[i]}"` +
        ' data="&larr;">' +
        "&larr;" +
        "</div>";
    } else if (listSimbols[i] === "ArrowRight") {
      btn +=
        '<div class="btn key" data-keys="' +
        `${listSimbols[i]}"` +
        ' data="&rarr;">' +
        "&rarr;" +
        "</div>";
    } else if (listSimbols[i] === "ArrowDown") {
      btn +=
        '<div class="btn key"  data-keys="' +
        `${listSimbols[i]}"` +
        ' data="&darr;">' +
        "&darr;" +
        "</div>";
    } else {
      btn +=
        '<div class="btn"  data-keys = "' +
        `${listSimbols[i]}` +
        '"data="' +
        `${listSimbols[i]}"` +
        ">" +
        `${listSimbols[i]}` +
        "</div>";
    }
    board.innerHTML = btn;
  }
}

InsertButtons();

function KeyDown(e) {
  const target = e.key;

  const I = Array.from(board.querySelectorAll("[data-keys]"));
  for (let i = 0; i < I.length; i += 1) {
    if (I[i].dataset.keys === target && I[i].dataset.keys !== "CapsLock") {
      I[i].classList.add("active");
    } else if (
      I[i].dataset.keys === target &&
      I[i].dataset.keys === "CapsLock"
    ) {
      I[i].classList.add("active");
    }
  }
}
document.addEventListener("keydown", KeyDown);

document.addEventListener("keyup", (e) => {
  if (e.key === "CapsLock" && !capLock) {
    capLock = true;
    return;
  }
  if (e.key === "CapsLock" && capLock) {
    capLock = false;
  }
});

function KeyUp(e) {
  const target = e.key;
  const I = Array.from(board.querySelectorAll("[data-keys]"));
  for (let i = 0; i < I.length; i += 1) {
    if (I[i].dataset.keys === target && I[i].dataset.keys !== "CapsLock") {
      I[i].classList.remove("active");
    } else if (
      I[i].dataset.keys === target &&
      I[i].dataset.keys === "CapsLock" &&
      !capLock
    ) {
      I[i].classList.remove("active");
    }
  }
}

document.addEventListener("keyup", KeyUp);

//убить остальные кнопки






document.addEventListener("click", (e) => {
  if (e.target.textContent === "CapsLock" && !capLock) {
    capLock = true;
    e.target.classList.add("active");
  } else if (e.target.textContent === "CapsLock" && capLock) {
    capLock = false;
    e.target.classList.remove("active");
  }
  return capLock;
});
let CaretPos=0
function print(event) {
  const target = event.target.getAttribute("data");
  
  
  if (target !== null && !capLock) {
    text.textContent =text.textContent.slice(0, CaretPos)+target+(text.textContent.slice(CaretPos,text.textContent.length))
    text.value=text.textContent
    CaretPos++
    console.log(text.textContent)
    console.log(CaretPos)
  } 
  
  else if (target !== null && capLock) {
    console.log(target)
    text.textContent =text.textContent.slice(0, CaretPos)+target.toUpperCase()+(text.textContent.slice(CaretPos,text.textContent.length));
    text.value=text.textContent
    CaretPos++
  
  }

}
function printKey(event) {
  const target = event.key;

  const list = [
    "Backspace",
    "Control",
    "Alt",
    "Delete",
    "Enter",
    "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ArrowUp",
    "CapsLock",
    "Shift",
    "Tab",
    "Meta",
  ];
  if (list.indexOf(target) === -1 && !capLock) {
    text.textContent =text.textContent.slice(0, CaretPos)+target+(text.textContent.slice(CaretPos,text.textContent.length))
    text.value=text.textContent
    CaretPos++
    
  
    console.log(CaretPos)
  } else if (list.indexOf(target) === -1 && capLock) {
    text.textContent =text.textContent.slice(0, CaretPos)+target.toUpperCase()+(text.textContent.slice(CaretPos,text.textContent.length))
    text.value=text.textContent
    CaretPos++
   
   
  } else if (list.indexOf(target) !== -1&& target === "Enter") {
   text.innerHTML+= "\n"
   CaretPos++
    console.log(text.value)

  }else if (list.indexOf(target) !== -1&& target === "Tab") {
    text.innerHTML+= "\t"
    CaretPos++
     console.log(text.value)
 
   }

} 



text.onclick=()=>{
  CaretPos= text.selectionStart=text.selectionEnd
  
}

function Backspace(e) {
  const target = e.target.textContent;

  
  if (target === "Backspace" &&CaretPos===text.textContent.length) {  

  
  
   text.textContent = text.textContent.slice(0, CaretPos-1)
   text.value=text.textContent
  CaretPos--
   if (CaretPos===0){
    return
  }  
  }
  else if(target === "Backspace"&& CaretPos!==text.textContent.length){
    if (CaretPos===0){
      return
    } 

    text.textContent = text.textContent.slice(0, CaretPos-1)+text.textContent.slice(CaretPos,text.textContent.length)
    text.value=text.textContent
    CaretPos--

    
      
      }
  else if(target === "Delete"&& CaretPos!==text.textContent.length){
    text.textContent = text.textContent.slice(0, CaretPos)+text.textContent.slice(CaretPos+1,text.textContent.length)
    text.value=text.textContent
  }
     

  }


function Backspace2(e) {
  const target = e.key;

  if (target === "Backspace"&& CaretPos===text.textContent.length&& CaretPos!==0) {
     text.textContent=text.textContent.slice(0, CaretPos-1)
     text.value=text.textContent
    
 CaretPos--
    if (CaretPos===0){
     return
   }  
   }
   else if(target === "Backspace"&& CaretPos!==text.textContent.length && CaretPos!==0){
     
    text.textContent=text.textContent.slice(0, CaretPos-1)+text.textContent.slice(CaretPos,text.textContent.length)
    text.value=text.textContent
      --CaretPos
     if (CaretPos===0){
       return
     }
    
       
       }
      
}

document.addEventListener("keyup", Backspace2);
board.addEventListener("click", Backspace);
document.addEventListener("keyup", printKey);
board.addEventListener("click", print);


// переход между языками
const codeAllRu=['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\','Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'Б', 'Ю', '.']
const codeAllEn =[
  '`',
  '1',
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Delete",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/"]

function langChange(e){
  if(e.ctrlKey&& e.shiftKey&&lang){
    
      console.log('Hi')
      for(let i=0; i< codeAllRu.length; i++){
    
        board.querySelectorAll("[data-keys]")[i].textContent=codeAllRu[i];
        lang=false
      

  }
  
  }
  else if(e.ctrlKey&& e.shiftKey&&!lang){
    for(let i=0; i< codeAllEn.length; i++){
      board.querySelectorAll("[data-keys]")[i].textContent=codeAllEn[i];
      lang=true
    }


  }
}
document.addEventListener('keydown',langChange)



