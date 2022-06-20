   const circle = document.querySelectorAll('circle')[0];
    
    export function formatTime(input){
        if(input<10 && input>=0) return "0"+input;
        return input;
    }



    export function isTimeValid(minutes,seconds){
        let smalllerThanZero = minutes < 0 || seconds < 0;
        let biggerThan60 = minutes > 60 || seconds > 60;
        if(smalllerThanZero || biggerThan60 )return false;
        return true; 
    }



    export function stopClock(initialSeconds,timerId){
        initialSeconds.value="0"+0;
        clearInterval(timerId);
        alert("TimesUP"); 
        circle.style.stroke="#09A65A";
        timerId=null;
        circle.style.stroke="red";
        }