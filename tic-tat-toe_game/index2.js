const resetButton=document.getElementById('reset_button');
const repeat=document.querySelector('.repeat');
const con=document.querySelector('.con');
const divCell=document.querySelectorAll('.cell');
const xLogo=document.querySelector('.logo');
const circle=document.querySelector('.circle');
const changeXY=document.querySelector('.X');
const winningMassage=document.querySelector('.winning_massage');
const Restet=document.getElementById('restet')

const winningCombation=[ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
];

const x_class="x";
const circle_class="circle";

let swith

divCell.forEach( (list) => {

    list.addEventListener('click', handleChange, {once:true});

})

function handleChange(e) {
      let cell=e.target;
    //   console.log(cell);
   
     const cureentClass= swith ? circle_class : x_class;
       if(cureentClass==circle_class){
            changeXY.innerHTML="The X Turn"
       }else{
            changeXY.innerHTML="The O Turn"
       }
   

     console.log(cureentClass);
     
      cell.classList.add(cureentClass);
      
      function circleturn(){
        swith=!swith;
}
      
    
   if (checkwin(cureentClass)) {
    draw(false);
   }else if(isdraw()){
    draw(true);
   }else{
    circleturn();
   }

}



function draw(drr){
      if (drr) {
        repeat.style.display="flex"; 
          winningMassage.innerHTML="Draws!"
      }else{
            repeat.style.display="flex";
            if(swith) {
                winningMassage.innerHTML="O Wins"
            }else{
                 winningMassage.innerHTML="X Wins"
            }
      }
}

function isdraw(){
      return [...divCell].every( (err) => {
          return err.classList.contains(x_class) || err.classList.contains(circle_class);
      })
}

function checkwin(cureentClass){
           return winningCombation.some( (combation) => {
               return combation.every( (index) => {
                   let resulta= divCell[index].classList.contains(cureentClass);
                   console.log(resulta);
                   return resulta;
               })
           })
           
}


Restet.addEventListener('click', () => {
        window.location.reload();
})