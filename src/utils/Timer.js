
function Timer() {
    let timeLeft = 10 

    const countdown = setInterval(() => {
        if (timeLeft <= 0) { 
            clearInterval(countdown)
            console.log("Time's up.")
        } else { 
            console.log(`${timeLeft}`)
            timeLeft--
        }
    }, 1000)
}

Timer()