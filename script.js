const loadingMessages = [
"Accessing memory archive...",
"Loading late night battles...",
"Finding 4am coversations...",
"Collecting food memories...",
"Recovering 'Abe saale' moments...",
"Restoring Sid's playlist...",
"Almost there..."
];

let progress = 0;
let index = 0;
const bar = document.getElementById("progressBar");
const text = document.getElementById("loadingText");
function load(){
  if(progress<=100){
    bar.style.width=progress+"%";
    if(index<loadingMessages.length){
      text.innerHTML =loadingMessages[index];
      index++;
    }
    progress+=15;
    setTimeout(load,3000);
  }
}
load();
  
