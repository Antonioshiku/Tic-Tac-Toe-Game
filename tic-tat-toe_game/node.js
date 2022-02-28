const xMarks=document.getElementById("logo");
const CircleMarks=document.getElementById("circle");
const PlayGame=document.querySelector(".Play_Game");

let close=setInterval(changPlace,1000);
setInterval(changPlacee,2000);

function changPlace(){
      xMarks.style.transform='translateY(-50px)';
      CircleMarks.style.transform='translateY(-50px)';
      xMarks.classList.add('change'); 
      CircleMarks.classList.add('change'); 
}
function changPlacee(){
    xMarks.style.transform='translateY(80px)';
    xMarks.classList.add('down'); 
    CircleMarks.style.transform='translateY(80px)';
    CircleMarks.classList.add('down'); 
}

