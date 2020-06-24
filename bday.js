var btn1= document.getElementById("btn1");
var btn2= document.getElementById("btn2");
var btn3= document.getElementById("btn3");
var btn4= document.getElementById("btn4");

var snd1 = new Audio("bday3.mp3");
var snd2 = new Audio("bday.mp3");
var snd3 = new Audio("bday1.mp3");
var snd4 = new Audio("bday2.mp3");

var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;

btn1.addEventListener("click",function(){
    if(!flag1){
    snd1.pause();
    snd2.pause();
    snd3.pause();
    snd4.pause();
    snd1.currentTime = 0;
    snd2.currentTime = 0;
    snd3.currentTime = 0;
    snd4.currentTime = 0;
    
    snd1.play();
    }
    else{
        snd1.pause();
        snd1.currentTime = 0;
    }
    flag1 = !flag1;
});
btn2.addEventListener("click",function(){
    if(!flag2){
    snd1.pause();
    snd2.pause();
    snd3.pause();
    snd4.pause();
    snd1.currentTime = 0;
    snd2.currentTime = 0;
    snd3.currentTime = 0;
    snd4.currentTime = 0;
    
    snd2.play();
    }
    else{
        snd2.pause();
        snd3.currentTime = 0;
    } 
    flag2 = !flag2;
});
btn3.addEventListener("click",function(){
    if(!flag3){
    snd1.pause();
    snd2.pause();
    snd3.pause();
    snd4.pause();
    snd1.currentTime = 0;
    snd2.currentTime = 0;
    snd3.currentTime = 0;
    snd4.currentTime = 0;
    
        snd3.play();
        }
        else{
            snd3.pause();
            snd3.currentTime = 0;
        } 
        flag3 = !flag3;
});
btn4.addEventListener("click",function(){
    if(!flag4){
    snd1.pause();
    snd2.pause();
    snd3.pause();
    snd4.pause();
    snd1.currentTime = 0;
    snd2.currentTime = 0;
    snd3.currentTime = 0;
    snd4.currentTime = 0;
    
        snd4.play();
        }
        else{
            snd4.pause();
            snd4.currentTime = 0;
        } 
        flag4 = !flag4; 
});
