console.log("Welcome To Tic Tac Toe")
let music  = new Audio("turn for x.mp3")
let Audioturn  = new Audio("https://assets.mixkit.co/active_storage/sfx/737/737.wav")
let suscess  = new Audio("https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=success-1-6297.mp3")
let Turn = "X"
let isgameover = false;


// Function to change the turn
const  changeTurn = ()=>{
    return Turn === "X" ? "0": "X"
}

// Function to check for a win

const  checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        // if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !===) )
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "100px"
            suscess.play() 
        }
    })
}

// Game Logic 
let boxes = document.getElementsByClassName("box");
console.log('Boxes:', boxes);
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    console.log('Boxtext:', boxtext);
    element.addEventListener('click', () =>{
        console.log('Box clicked');
        if(boxtext.innerText === ''){
            boxtext.innerText = Turn;
            console.log('Turn:', Turn);
           Turn = changeTurn();
           console.log('Turn after change:', Turn);
            Audioturn.play()
            checkWin();
            if(! isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + Turn;
            }
           
        }
    })

})


// add on click listner to reset button
reset.addEventListener('click', () =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })  
    Turn ="X"
     isgameover = false
        document.getElementsByClassName("info")[0].innerText = "Turn for" + Turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})