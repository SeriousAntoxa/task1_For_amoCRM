const inputEl = document.querySelector("input")
const buttonEl = document.querySelector("button")
const timerEl = document.querySelector("span")

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        let counter = seconds

        let intervalId = setInterval(() => {
            
            if (counter === 0) {
                clearInterval(intervalId)
                paintTimer(0)
                inputValidValue = []
                inputEl.value = ""
                inputEl.removeAttribute('disabled')
                buttonEl.removeAttribute('disabled')
            }

            paintTimer(counter)
            counter -= 1
            
        }, 1000)
    }
}

const paintTimer = (counter) => {
    let ourSeconds = counter
    let hours = Math.trunc(ourSeconds / 3600)
    ourSeconds -= hours * 3600
    let minutes = Math.trunc(ourSeconds / 60)
    ourSeconds -= minutes * 60
    let second = ourSeconds

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (second < 10) {
        second = "0" + second
    }

    timerEl.innerHTML = `${hours}:${minutes}:${second}`
}

const animateTimer = createTimerAnimator()

let inputValidValue = []

inputEl.addEventListener("input", (e) => {
    if (!!e.data && !isNaN(+e.data)) {
        inputValidValue.push(+e.data)
    }
    inputEl.value = inputValidValue.join("")
    // Очистите input так, чтобы в значении
    // оставались только числа
})

buttonEl.addEventListener("click", () => {
    inputEl.setAttribute("disabled", true)
    buttonEl.setAttribute("disabled", true)
    inputEl.value = inputValidValue.join("")
    const seconds = Number(inputEl.value)
    animateTimer(seconds)
})
