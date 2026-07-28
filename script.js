const loadingMessages = [
"Unlocking memory archive...",
"Replaying late-night battles...",
"Recovering 4AM coversations...",
"Restoring food memories...",
"Recovering "Abe saale" moments...",
"Playing Sid's playlist on repeat...",
"Updating sleep schedules...",
"Making room for one more memory..."
];

let progress = 0;
let index = 0;
const progressBar = 
document.getElementById("progressBar");
const loadingText = document.getElementById("loadingText");

function updateLoader(){

if(progress<=100){
progressBar.style.width=progress +"%";
if(progress % 13 === 0 && index < loadingMessages.length){
loaadingText.style.opacity=0;

setTimeout(()=>{
loadingText.textContent=loadingMessages[index];
loadingText.style.opcaity=1;
index++;
},250);
}
progress++;
setTimeout(updateLoader,70);
}
else{
loadingText.innerHTML="Archive restored.";
}
}
updateLoader()














        
