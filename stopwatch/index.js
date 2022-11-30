const btnStart=document.querySelector('#btnStart');
const btnStop=document.querySelector('#btnStop');
const btnRestart=document.querySelector('#btnRestart');
const appendmint=document.querySelector('#mint');
const appendsecond=document.querySelector('#second');
let secons="00";
let mnits="00";
var intervar;


btnStart.onclick=()=>{
clearInterval(intervar);
intervar= setInterval(startTimer,10);
}

btnStop.onclick=()=>{
clearInterval(intervar);
}
btnRestart.onclick=()=>{
clearInterval(intervar);
secons="00";
mnits="00";
appendmint.innerHTML=mnits;
appendsecond.innerHTML=secons;
}

function startTimer () {
    secons++; 
    
    if(secons <= 9){
        appendsecond.innerHTML = "0" + secons;
    }
    
    if (secons > 9){
        appendsecond.innerHTML = secons;
      
    } 
    
    if (secons > 99) {
      console.log("mnits");
      mnits++;
      appendmint.innerHTML = "0" + mnits;
      secons = 0;
      appendsecond.innerHTML = "0" + 0;
    }
    
    if (mnits > 9){
        appendmint.innerHTML = mnits;
    }
  
  }
  

