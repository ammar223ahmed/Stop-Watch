var minute_html = document.getElementById("min");
var second_html = document.getElementById("sec");
var milliseconds_html = document.getElementById("ms");


var second = 0;
var milliSeconds = 0;
var minutes = 0;

var watchInterval;

function start(){
    watchInterval = setInterval(function(){
       milliSeconds++
       if(milliSeconds >= 99){
second++
milliSeconds = 0
       }if(second >= 59){
        minutes++
        second = 0
       }
       milliseconds_html.innerText = milliSeconds; 
       second_html.innerText = second < 10 ? '0' + second : second; 
       minute_html.innerText = minutes < 10 ? '0' + minutes : minutes; 
    }, 10);    
}
function stop(){
    clearInterval(watchInterval);
}
function reset(){
    clearInterval(watchInterval);
     second = 0;
     milliSeconds = 0;
     minutes = 0;

     minute_html.innerText = 0
     second_html.innerText = 0
     milliseconds_html.innerText = 0   
}