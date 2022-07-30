//**********NOTE AB smjhe queryselector me innerhtml and getelement wale me innertext

let turn="X";
//function to change
let win=false;
const changeturn=()=>{
    if(turn=="O") return "X";
    else return "O";
}
//for checking win
function checkwin(){
let boxtexts=document.getElementsByClassName("boxtext");
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
wins.forEach( e=> {
    if( (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !=="")){
        console.log("ho");
        win=true;
        document.getElementsByClassName("info")[0].innerText=boxtexts[e[0]].innerText+" Won ";
        document.getElementsByClassName("img")[0].getElementsByTagName('img')[0].style.width ="200px";
        document.getElementsByClassName("img")[0].getElementsByTagName('img')[0].style.height ="200px";
    }
})
    
}

//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        
        if(boxtext.innerText==''){
            boxtext.innerText=turn;
            turn=changeturn();
             checkwin();
            if(win===false){
                
            document.getElementsByClassName("info")[0].innerText=" Turn for " + turn;
            }
            
        }
    })
})
// let reset=document.querySelector('#reset');
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(e=>{
e.innerText=" ";
    

});
win=false;
    turn="X";
    document.querySelector(".info").innerHTML=" Turn for " + turn;
    document.getElementsByClassName("img")[0].getElementsByTagName('img')[0].style.height ="0px";
    document.getElementsByClassName("img")[0].getElementsByTagName('img')[0].style.width ="0px";
    
})