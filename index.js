let count = 0;
let countEl = document.getElementById("count-el");
let message = "Previous entries: "
let saveEl = document.getElementById("save-el");


function increment(){
  count += 1;
  countEl.innerText = count;
}

function save(){
  message += count + " - "
  count = 0;
  countEl.innerText = count;
  saveEl.innerText = message;
  
}




  
