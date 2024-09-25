console.log("Hello Wolrd");
let boxes=document.querySelectorAll(".box");

let resetbtn=document.querySelector("#reset-butn");

let msg=document.querySelector("#win-msg");

let msgcontain=document.querySelector(".win-msg-contain");

//let playxtext=document.querySelector(".playx");

//let playotext=document.querySelector(".playo");

let newbtn=document.querySelector(".new-game")

let turnx =true;

const winpattern= [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2 (Correct position)
    [6, 7, 8], // Row 3 (Added this missing row)
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
];

//Sound Effects
const tapsound= new Audio('tap.mp3');
const winsound=new Audio('win.mp3');
const uisound=new Audio('ui-tap.mp3');
const drawsound=new Audio('draw.mp3');

boxes.forEach((box) =>{
     box.addEventListener("click",() => {
        tapsound.play();
    if(turnx===true)
        {
            //playxtext.classList.add("hide");
            //playotext.classList.remove("hide");
            turnx=false;
            box.innerText="X";
            box.disabled=true;
        }
        else if(turnx===false)
            {

                //playxtext.classList.remove("hide");
                //playotext.classList.add("hide");
                turnx=true;
                box.innerText="O";
                box.disabled=true;
        }
            checkwinner();
     })
})

const checkwinner= ()=>{
    for (let pattern of winpattern) {
        
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos0val=boxes[pattern[0]].innerText;
        let pos1val=boxes[pattern[1]].innerText;
        let pos2val=boxes[pattern[2]].innerText;
        //logic for checking the winner
          if(pos0val!=""&&pos1val!=""&&pos2val!=""){
            if(pos0val===pos1val&&pos1val===pos2val){
                winner(pos0val);
                return;
            }
          }
    }
    draw();
}

const draw=()=>{
    let isdraw=true;
    boxes.forEach((box)=>{
     if(box.innerText===""){
        isdraw=false;
     }
    })
    if(isdraw){
    msg.innerText = `Draw! `;
    msg.style.color="black";
    drawsound.play();
    drawsound.mp3;
    msgcontain.classList.remove("hide"); 
    disablebtn();
    document.querySelector("body").style.backgroundColor="#FFF4B5"
    newbtn.classList.remove("hide");
   boxes.forEach(box => {
    box.style.backgroundColor="#1A2130";
    box.style.color="white";
    document.querySelector(".heading").style.color="#87A2FF";
   });
}
}

const winner=(val)=>{
    console.log("Winner!!!!!!!! .is",val);
    msg.innerText = `Winner Is! ${val}`;
    
    winsound.play();  // Winning Sound...
                            
    msgcontain.classList.remove("hide"); 
    disablebtn();
    document.querySelector("body").style.backgroundColor="#83B4FF"
    newbtn.classList.remove("hide");
   boxes.forEach(box => {
    box.style.backgroundColor="#1A2130";
    box.style.color="white";
    document.querySelector(".heading").style.color="black";
   });
   //playotext.classList.add("hide");
   //playxtext.classList.add("hide");
}

const disablebtn=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
//reset Button
let resetfunc =()=>{
        turnx=true;
        enablebtn();
        
        uisound.play(); // Tap Sound..

        msgcontain.classList.add("hide");
        console.log("btn press")
        document.querySelector("body").style.backgroundColor="#211951";
        document.querySelector(".heading").style.color="white";
        newbtn.classList.add("hide");
        boxes.forEach(box => {
            box.style.backgroundColor="#15F5BA";
            box.style.color="black";
           });
           //playotext.classList.add("hide");
           //playxtext.classList.remove("hide");
}
resetbtn.addEventListener("click", resetfunc);
newbtn.addEventListener("click", resetfunc);

let content=document.querySelector(".container");

let newgame=document.querySelector(".newgame-btn");

let introbtn=document.querySelector(".intro-btn");
let introdiv=document.querySelector(".intro");

introbtn.addEventListener("click",()=>{
    uisound.play(); // Tap Sound..
    introdiv.style.display='none';
    content.classList.remove("verhide"); //as we start the game our game appears.
    newgame.classList.remove("verhide"); //as we start the game our new game button appears.
})

//Version Info Functionality..

let version=document.querySelector(".ver");
let verbtn=document.querySelector(".verbtn");
let verclick=false;

let intropara=document.querySelector(".intro-para");


verbtn.addEventListener("click",()=>{
    uisound.play();                                 // Tap Sound..
     if(version.classList.contains("verhide")){
        version.classList.remove("verhide");
        verbtn.style.color='white';

        intropara.classList.add('verhide');  //these are for to make responsive while fixing bugs.
        version.style.marginLeft='8vmin';
        version.style.height='55vmin';
        version.style.width='45vmin';
        version.style.marginTop='-10vmin';
        verbtn.style.marginTop='5vmin';
        introbtn.classList.add("verhide");
     }else{
        version.classList.add("verhide");
        verbtn.style.color='black';
        
        intropara.classList.remove('verhide');  //these are for to make responsive while fixing bugs.
        version.style.marginLeft='100vmin';
        version.style.height='35vmin';
        version.style.width='34vmin';
        version.style.marginTop='-52vmin';
        introbtn.classList.remove("verhide");
     }
    verclick=true;
})
