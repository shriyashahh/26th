document.addEventListener("DOMContentLoaded",()=>{
});
const envelope=document.getElementbyId("envelope");
setTimeout(()=>{
  envelope.stlye.transition="1.5s ease-in-out";
  envelope.style.transform-
    "translate(-50%,-50%)rotateT(180deg)";
  setTimeout(()=>{
    envelope.src="assets/envelope_front.jpg";
    envelope.style.transform=
      "translate(-50%,-50%)rotateY(0deg)";
  },750);
},6500);
  

