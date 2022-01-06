const startbtn = document.querySelector('.start-button')
const restartbtn = document.querySelector('.restart')
const grid = document.querySelector('.grid')
const scoring = document.getElementById('score')
const uparrow = document.querySelector('.up')
const downarrow = document.querySelector('.down')
const leftarrow = document.querySelector('.left')
const rightarrow = document.querySelector('.rbut')
let squares = []
let score = 0
const width = 28
let pacdotandpowerpallets = []

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]
function board(){
    
    for(let i=0; i<layout.length; i++){

        const square = document.createElement('div')

        grid.appendChild(square)

        squares.push(square)

        if(layout[i] === 0){
            squares[i].classList.add('pacdot')
            
        }

        else if(layout[i] === 1){
            squares[i].classList.add('walls')
            
        }

        else if(layout[i] === 2){
            squares[i].classList.add('ghost')
            
        }

        else if(layout[i] === 3){
            squares[i].classList.add('powerpallets')
            
        }

    }
}

board()

let paccurrent = 490
squares[paccurrent].classList.add('pacman')

function control(e) {
    squares[paccurrent].classList.remove('pacman')
    switch(e.keyCode) {
        case 40:
        console.log('pressed down')
        if (!squares[paccurrent+width].classList.contains('ghost')&&
            !squares[paccurrent+width].classList.contains('walls')&&
            paccurrent + width <width*width) 
        paccurrent += width
        
        break
        case 38:
        console.log('pressed up')
        if (!squares[paccurrent-width].classList.contains('ghost')&&
            !squares[paccurrent-width].classList.contains('walls')&&
            paccurrent - width >=0)
         paccurrent -= width
        
        break
        case 37: 
        console.log('pressed left')
        if(!squares[paccurrent-1].classList.contains('ghost')&&
           !squares[paccurrent-1].classList.contains('walls')&&
            paccurrent % width!==0) 
            paccurrent-=1
            if(paccurrent=== 364){
                paccurrent =391
            }
        
        break
        case 39:
        console.log('pressed right')
        if(!squares[paccurrent+1].classList.contains('ghost')&&
           !squares[paccurrent+1].classList.contains('walls')&&
            paccurrent % width < width -1) 
            paccurrent +=1
            if(paccurrent=== 391){
                paccurrent = 364
            }
        
        break
    }
    squares[paccurrent].classList.add('pacman')
    pacdoteat()
    powerpalletseaten()
    gamewin()
    gameover()

    uparrow.addEventListener("click" , moveup);
    downarrow.addEventListener("click" , movedown);
    leftarrow.addEventListener("click" , moveleft);
    rightarrow.addEventListener("click" , moveright);

}
document.addEventListener('keyup', control)




function pacdoteat(){

    if(squares[paccurrent].classList.contains('pacdot')){
        score++
        scoring.innerHTML = score
        squares[paccurrent].classList.remove('pacdot')
    }
}


class evil {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.isscared = false
        this.timeid = NaN
        this.evilnow = startIndex
    }
}

ghosts = [
    new evil('tim', 348, 600),
    new evil('rim', 376, 550),
    new evil('kim', 351, 550),
    new evil('sim', 379, 600)
]


ghosts.forEach(evil => { 
    squares[evil.evilnow].classList.add(evil.className)
    squares[evil.evilnow].classList.add('evil')
    
})



function moveevil(evil){

    console.log('evil moved')
    const directions = [ +1 , -1 , +width , -width]
    let direction = directions[Math.floor(Math.random()*directions.length)]
    console.log(direction)

    evil.timerId = setInterval(function(){

        if(
           !squares[evil.evilnow + direction].classList.contains('walls')&&
           !squares[evil.evilnow + direction].classList.contains('evil')
           ){
            squares[evil.evilnow].classList.remove('evil' , 'scared-evil')
            squares[evil.evilnow].classList.remove(evil.className)
            evil.evilnow += direction
            squares[evil.evilnow].classList.add(evil.className)
            squares[evil.evilnow].classList.add('evil')
           }

        else{
            direction = directions[Math.floor(Math.random()*directions.length)]
        }   

        if(evil.isscared === true){

            squares[evil.evilnow].classList.add('scared-evil')
        }


        if (evil.isScared === true && squares[evil.evilnow].classList.contains('pacman')) {
           
            squares[evil.evilnow].classList.remove(evil.className, 'evil', 'scared-evil')
           
            evil.evilnow = evil.startIndex
           
            score += 20
            
            squares[evil.evilnow].classList.add(evil.className, 'evil')
        }

        gameover()

    
    }, evil.speed )
    


   
}

function powerpalletseaten(){

    if(squares[paccurrent].classList.contains('powerpallets')){

        squares[paccurrent].classList.remove('powerpallets')

        score += 10

        ghosts.forEach(evil=>evil.isscared = true)

        setTimeout(unscareghosts, 10000)
    }
}

function unscareghosts(){

    ghosts.forEach(evil=>evil.isscared = false)
}


function gameover(){

    if(
        squares[paccurrent].classList.contains('evil')&&
        !squares[paccurrent].classList.contains('scared-evil')
    ){

        ghosts.forEach(evil=> clearInterval(evil.timeid))

        document.removeEventListener('keyup',control)

        scoring.innerHTML = 'YOU LOSE'
    }


}


function gamewin(){

    if( score === 200){

        ghosts.forEach(evil=> clearInterval(evil.timeid))

        document.removeEventListener('keyup',control)

        scoring.innerHTML = 'YOU WIN 🤩'
    }
}

function moveup()
{
    squares[paccurrent].classList.remove("pacman");
    if(paccurrent - width >= 0 && !squares[paccurrent - width].classList.contains("walls"))
        {
            paccurrent -= width;
        }
    squares[paccurrent].classList.add("pacman");
    pacdoteat();
    powerpalletseaten();
    gamewin();
}

function movedown()
{
    squares[paccurrent].classList.remove("pacman");
    if(paccurrent + width < width*width && !squares[paccurrent + width].classList.contains("walls") && 
    !squares[paccurrent + width].classList.contains("ghost"))
    {
        paccurrent += width;
    }
    squares[paccurrent].classList.add("pacman");
    pacdoteat();
    powerpalletseaten();
    gamewin();

}    

function moveleft()
{
    squares[paccurrent].classList.remove("pacman");
    if(paccurrent % width !== 0 && !squares[paccurrent - 1].classList.contains("walls"))
    {
        paccurrent -= 1;
    }
    if(paccurrent === 364)
    {
        paccurrent === 391;
    }
    squares[paccurrent].classList.add("pacman");
    pacdoteat();
    powerpalletseaten();
    gamewin();
}

function moveright()
{
    squares[paccurrent].classList.remove("pacman");
    if(paccurrent % width < width - 1 && !squares[paccurrent + 1].classList.contains("walls"))
    {
        paccurrent += 1;
    }
    if(paccurrent === 391)
    {
        paccurrent === 364;
    }
    squares[paccurrent].classList.add("pacman");
    pacdoteat();
    powerpalletseaten();
    gamewin();

}    


function startfunction(){

    document.addEventListener('keyup', control)
    uparrow.addEventListener("click" , moveup);
    downarrow.addEventListener("click" , movedown);
    leftarrow.addEventListener("click" , moveleft);
    rightarrow.addEventListener("click" , moveright);
    ghosts.forEach( evil =>moveevil(evil))


}

function restartfunction(){


     pacdotandpowerpallets = [];
     for(let i = 0 ; i < layout.length ; i++)
     {
         if(layout[i] === 0)
         {
            pacdotandpowerpallets.push(1);
         }
 
         else if(layout[i] === 3)
         {
            pacdotandpowerpallets.push(1);
         }
     }
  
    score = 0;
    scoring.innerText = score;
    
    ghosts.forEach(evil => clearInterval(evil.timerId));
    
    ghosts.forEach(evil => {
        squares[evil.evilnow].classList.remove(evil.className , 'evil' , 'scared-evil');
        evil.evilnow = evil.startIndex;
        squares[evil.evilnow].classList.add(evil.className , 'evil');
    })
    
    squares[paccurrent].classList.remove("pacman");
    paccurrent = 490;
    squares[paccurrent].classList.add("pacman");
    
    for(let i = 0 ; i < layout.length ; i++)
    {
        if(layout[i] === 0 && !squares[i].classList.contains("pacdots"))
        {
            squares[i].classList.add("pacdot");
        }

        else if(layout[i] === 3 && !squares[i].classList.contains("powerpallets"))
        {
            squares[i].classList.add("powerpallets");
        }
    }
   
    document.removeEventListener("keyup" , control);
    uparrow.removeEventListener("click" , moveup);
    downarrow.removeEventListener("click" , movedown);
    leftarrow.removeEventListener("click" , moveleft);
    rightarrow.removeEventListener("click" , moveright);
}

startbtn.addEventListener('click', startfunction)
restartbtn.addEventListener('click', restartfunction)