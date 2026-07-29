document.addEventListener("DOMContentLoaded",()=>{

const seal=document.querySelector(".wax-seal");
const flap=document.querySelector(".envelope-flap");

seal.addEventListener("click",()=>{

seal.style.transform="translateX(-50%) scale(0)";

seal.style.opacity="0";

setTimeout(()=>{

flap.style.transform="rotateX(180deg)";

},300);

});

});
