"use strict";

let hraje = 'circle';
let symbol = document.querySelector('.kolecko');
/*let ctverecek = document.querySelectorAll(".policko");*/

 const Hra = (event) => {
   let ctverecek = event.target;

   if (ctverecek.className === 'policko') {
 
     if (hraje === 'circle') {
      
       ctverecek.classList.add('board__field--circle');   
       hraje = 'cross';
       symbol.src = 'cross.svg';
       ctverecek.disabled = true;
     }
     else if (hraje === "cross") {
       ctverecek.classList.add("board__field--cross");
       hraje = "circle";
       symbol.src = "circle.svg";
      ctverecek.disabled = true;
    
     }
    }
 };

 let klik = document.querySelectorAll(".policko");
 klik = addEventListener("click", Hra);
