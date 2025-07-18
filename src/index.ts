const inputField = document.getElementById("time") as HTMLInputElement
const startBtn = document.getElementById("start-btn") as HTMLButtonElement
const stopBtn =  document.getElementById("stop-btn") as HTMLButtonElement
const continueBtn = document.getElementById("continue-btn") as HTMLButtonElement
const showTime = document.getElementById('display-time') as HTMLButtonElement
const formSetter = document.getElementById("form-setter") as HTMLFieldSetElement

let itsON: boolean = true;
let timerId: number;
let timeInSeconds: number;

formSetter.addEventListener('submit', (e)=>{
    e.preventDefault()
})

startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
continueBtn.addEventListener('click', continueTimer)
function startTimer():void{
    clearInterval(timerId)
    let minutes = Number(inputField.value);
    inputField.value = '';
    timeInSeconds = minutes * 60;
    updateTimer()
    
    
}

function renderTimer():void{

    if (timeInSeconds>=0){
        let min = (String(Math.floor(timeInSeconds/60))).padStart(2, "0")
        let secs = (String(timeInSeconds%60)).padStart(2, "0")   
    
        showTime.innerText =  `${min}:${secs}`
    }
}

function updateTimer():void{

    renderTimer()
    timerId = setInterval(() => {
        
        if (itsON && timeInSeconds>=0){
            timeInSeconds--;
            renderTimer();
            console.log(timeInSeconds);
        }
        else{
            clearInterval(timerId);
        }
    }, 1000);
}
function stopTimer():void{
    console.log('chamou a função, ao menos');
    if (itsON){
        itsON = false
        clearInterval(timerId)
    }
}
function continueTimer():void{
    if (!itsON){
        itsON = true
        clearInterval(timerId)
        updateTimer()
    }
}