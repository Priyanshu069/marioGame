
function startGame()
{
score=0
cross=true;

hideButton.style.visibility='hidden';
myScore.style.visibility='visible';
audio=new Audio('marioAudio.mp3')
audioGO=new Audio('gameOverAudio.mp3');
audio.loop=true;
audio.play();

document.onkeydown=function(e){
    console.log("Key code is : "+e.keyCode)
    if(e.keyCode==38)
    {
        mario=document.querySelector('.mario');
        mario.classList.add('animateMario');
        setTimeout(()=>{
            mario.classList.remove('animateMario')
        },800);
    }

    if(e.keyCode==39){
        mario=document.querySelector('.mario');
        mx=parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
        mario.style.left=(mx+110)+"px";
    }
    
    if(e.keyCode==37){
        mario=document.querySelector('.mario');
        mx=parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
        mario.style.left=(mx-110)+"px";
    }
}
        enemy=document.querySelector('.enemy');
        enemy.classList.add('animateEnemy');
setInterval(()=>{
    mario=document.querySelector('.mario');
    gameOver=document.querySelector('.gameOver');
    enemy=document.querySelector('.enemy');  

    mx=parseInt(window.getComputedStyle(mario,null).getPropertyValue('left')); //by using this we are finding the position of mario at any moment of time
    my=parseInt(window.getComputedStyle(mario,null).getPropertyValue('top'))
    ex=parseInt(window.getComputedStyle(enemy,null).getPropertyValue('left'));
    ey=parseInt(window.getComputedStyle(enemy,null).getPropertyValue('top'))

    dx=Math.abs(mx-ex);
    dy=Math.abs(my-ey);

    if(dx<80 && dy<40){
        gameOver.innerHTML="Game Over - Reload to Replay"
        gameOver.style.visibility='visible';
        enemy.classList.remove('animateEnemy');
        setTimeout(()=>{
           audioGO.play();
           audio.pause();
        },100);
    }
    else if(dx<80 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
           cross=true;
        },1000);
        setTimeout(()=>{
            aniDur=parseFloat(window.getComputedStyle(enemy,null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.07;
            enemy.style.animationDuration=newDur+'s';
        },500)
        
    }

},100);

function updateScore(score){
    myScore.innerHTML="Your score is : "+score
}
}
