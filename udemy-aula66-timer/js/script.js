const $buttonStart = document.querySelector('.button-start')
const $buttonPause = document.querySelector('.button-pause')
const $buttonReset = document.querySelector('.button-reset')

const $clock = document.querySelector('.clock')

let seconds = 0
let timer

function getHourFromSeconds(seconds) {
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function startClock() {
    timer = setInterval(() => {
        seconds++
        $clock.textContent = getHourFromSeconds(seconds)
    }, 1000);
}

// $buttonStart.addEventListener('click', function () {
//     startClock()
//     $clock.classList.remove('paused')
// })

// $buttonPause.addEventListener('click', function () {
//     clearInterval(timer)
//     $clock.classList.add('paused')
// })

// $buttonReset.addEventListener('click', function(){
//     clearInterval(timer)
//     $clock.textContent = '00:00:00'
//     seconds = 0
//     $clock.classList.remove('paused')
// })


// Outra forma

document.addEventListener('click', function(event){
    const element = event.target // diz em que lugar a pessoa clicou
    console.log(element)
    if(element.classList.contains('start')) {
        startClock()
        $clock.classList.remove('paused')
    }

    if(element.classList.contains('pause')){
        clearInterval(timer)
        $clock.classList.add('paused')
    }

    if(element.classList.contains('reset')){
        clearInterval(timer)
        $clock.textContent = '00:00:00'
        seconds = 0
        $clock.classList.remove('paused')
    }
})
