"use strict";

let hraje = 'circle';
let symbol = document.querySelector('.kolecko');

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
    if (isWinningMove(ctverecek)) {
        if (getSymbol(ctverecek) === 'circle')
     
        {
            const confirmation = confirm('Vyhravaji koleckari, protože jsou the best',);
            
            if (confirmation === true) {
                location.reload();
            }
    
            
        } else if (getSymbol(ctverecek) === 'cross') {
            const confirmation = confirm('Chacha koleckari, utřeli jste, haha',);
            if (confirmatin === true) {
                location.reload();
            }
        }
            
        }
        
    };
 let klik = document.querySelectorAll(".policko");
 klik.forEach( policko => policko.addEventListener('click', Hra) );

 const getSymbol = (field) => {
     if (field.classList.contains('board__field--cross')) {
         return 'cross';
     } else if (field.classList.contains('board__field--circle')) {
         return 'circle';
         
     }else{
         return undefined;
     }
 };

 const boardSize = 10;
 const fields = document.querySelectorAll('.policko');

 const getField = (row, column) => fields[row * boardSize + column];



 const getPosition = (field) => {
     let fieldIndex = 0;
     while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
         fieldIndex++;
     }
 
     return {
         row: Math.floor(fieldIndex / boardSize),
         column: fieldIndex % boardSize,
     };
 };
 
 
 
 const symbolsToWin = 5;
 const isWinningMove = (field) => {
     const origin = getPosition(field);
     const symbol = getSymbol(field);
 
     let i;
 
     let inRow = 1; // Jednička pro právě vybrané políčko
     // Koukni doleva
     i = origin.column;
     while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
         inRow++;
         i--;
     }
 
     // Koukni doprava
     i = origin.column;
     while (
         i < boardSize - 1 &&
         symbol === getSymbol(getField(origin.row, i + 1))
     ) {
         inRow++;
         i++;
     }
 
     if (inRow >= symbolsToWin) {
         return true;
     }
 
     let inColumn = 1;
     // Koukni nahoru
     i = origin.row;
     while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
         inColumn++;
         i--;
     }
 
     // Koukni dolu
     i = origin.row;
     while (
         i < boardSize - 1 &&
         symbol === getSymbol(getField(i + 1, origin.column))
     ) {
         inColumn++;
         i++;
     }
 
     if (inColumn >= symbolsToWin) {
         return true;
     }
 
     return false;
 
 };
