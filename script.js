var m=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
// let gameover=new Audio("gameover.mp3");
let boxes=document.getElementsByClassName("box");
// m.play();

let turn="X";

const changeturn=()=>{

    // return turn==="X"?"0":"X";
    // or
    if(turn=="X"){
        return "0";
    }else{
        return "X";
    }
}

const checkwin=()=>{

let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

wins.forEach(e=>{
    console.log(e[0]);
   
})
}

checkwin();

Array.from(boxes).forEach(element=>{
    element.addEventListener("click",()=>{
      if(element.innerHTML==""){
        element.innerHTML=turn;
        turn=changeturn();
        audioturn.play();
        m.play();
       checkwin();
        let info=document.querySelector(".info");
        info.innerHTML="It's turn for "+turn;
       
      }

    })
    
})




const reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
    location.reload();
})
