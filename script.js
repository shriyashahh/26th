const loadingMessages = [
"Accessing Memory Archive...",
"Loading Clash Royale Battles...",
"Finding Late Night Coversations...",
"Collecting Food Memories...",
"Recovering Abe Saale Moments...",
"Restoring Sid's Playlist...",
"Almost There..."
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
    setTimeout(load,800);
  }
}
load();
  
