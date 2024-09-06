let timerEl=document.getElementById('timer')

let textEl=document.getElementById('text')

let startTimerBtnEl=document.getElementById('startTimerBtn')


let min=24
let secs=60

let count=0

let timerIntervalId


//initially setting it to true
//after 25 min there is going to be a break and resetTime() can be called for isBreak=true
let isBreak=true


function startTimer(){
 
    count++
    
    if(count%2===1)
    {
        console.log("started")
        
        if(isBreak===true)
            textEl.innerText="Your time is running..."

        if(isBreak===false)
            textEl.innerText="Its your break time..."

        startTimerBtnEl.innerText="Pause"

        timerIntervalId = setInterval(() => {
            secs--
            if(secs<10 && secs!=0)
            {
                timerEl.innerText=`${min}:0${secs}`
                return
            }
            if(secs===0)
            {
                timerEl.innerText=`${min}:0${secs}`
                if(min===0)
                {
                    resetTimer()
                    return
                }
                else{
                    secs=60
                    min--
                    return 
                }          
            }
            
            timerEl.innerText=`${min}:${secs}`
        }, 1000);
    }
    else{

        console.log("paused")

        textEl.innerText="You have paused the time."
        clearInterval(timerIntervalId)
        
        startTimerBtnEl.innerText="Start"
        
    }
}


function resetTimer()
{
    clearInterval(timerIntervalId)
    console.log("its break")

    //5 mins break
    if(isBreak===true)
    {
        count=0
        min=4
        secs=60
        isBreak=false
        startTimer()
        return
        
    }
    //reset to 25 mins
    else{
        count=0
        min=24
        secs=60
        isBreak=true
        startTimerBtnEl.innerText="Start Again"
        textEl.innerText="Your break time is over."
    }
}
