const loadingMessages = [
"Unlocking memory archive...",
"Replaying late-night battles...",
"Recovering 4AM conversations...",
"Restoring food memories...",
"Recovering \"Abe saale\" moments...",
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
loadingText.style.opacity=0;

setTimeout(()=>{
loadingText.textContent=loadingMessages[index];
loadingText.style.opacity=1;
index++;
},250);
}

if(index === loadingMessages.length && progress >=91){
        progress = 101;
        setTimeout(showFinished,3000);
        return;
}
progress++;
setTimeout(updateLoader,100);
}
}        
function showFinished(){

    loadingText.style.opacity = 0;

    setTimeout(() => {

        loadingText.innerHTML = `
            <div class="finished">
                <p>Archive restored.<br>Except one memory</p>
            </div>
        `;

        loadingText.style.opacity = 1;

        // Wait another second before showing the button
        setTimeout(() => {

            loadingText.innerHTML += `
                <button id="beginBtn" class="fadeBtn">Ready to unfold? ➜</button>
            `;

            document.getElementById("beginBtn").addEventListener("click", () => {
                window.location.href="intro.html";
            });

        }, 1000);

    }, 400);

}
updateLoader();
