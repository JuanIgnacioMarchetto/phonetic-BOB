const qwertyKeys = "QWERTYUIOPASDFGHJKLZXCVBNM";
const numKeys = "1234567890";


function renderKeys() {
  qwertyKeys.split("").forEach((letter) => {
    const keyboard = document.getElementById("keyboard");
    const button = document.createElement("button");
    button.textContent = letter;
    keyboard.appendChild(button);
    
    
  });
}
renderKeys();

const keys = document.querySelectorAll("button");
[...keys].forEach((key) => {
  key.addEventListener("click", updateText);
});
const input = document.getElementById("input");

function updateText() {
  //console.log(this.textContent);
  input.value += this.textContent;
  // add the clicked letter to the p
}

document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("input").value);
});

function decir(input){
    speechSynthesis.speak(new SpeechSynthesisUtterance(input));
}

let btnClear = document.getElementById("delete");
let inputs = document.querySelectorAll("input");


document.getElementById('delete').addEventListener("click",()=>{
  input.value = ""
});

