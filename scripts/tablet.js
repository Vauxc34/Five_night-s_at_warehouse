const counter_one = document.getElementById("counter1")
const counter_two = document.getElementById("counter2")
const counter_three = document.getElementById("counter3")
const counter_four = document.getElementById("counter4")

const tablet_frame = document.getElementById("tablet")
let screen1 = document.getElementById("screen")

const btn_show_hide = document.getElementById("check")

tablet_frame.style.top = "-1000px"

 btn_show_hide.addEventListener("click", () => {

    tablet_frame.style.top = "0px"
    tablet_frame.style.transition = '2.5s'

    /* const hide = () => {
        tablet_frame.style.top = "-1000px"

    }

    setInterval(hide, 10000) */

}) 



screen1.style.backgroundColor = 'green'

let actual_time_1 = 0
let actual_time_2 = 0
let actual_time_3 = 0
let actual_time_4 = 0

const passing_counter_one = () => {
    actual_time_1 = Math.floor(Math.random() * 5)
    counter_one.textContent = actual_time_1 + "counter_one"

    if(actual_time_1 == 2) {
        
        screen1.style.backgroundColor = "red"


    }

}

const passing_counter_two = () => {
    actual_time_2 = Math.floor(Math.random() * 5)
    counter_two.textContent = actual_time_2 + "counter_two"

    if(actual_time_2 == 2) {
        
        screen1.style.backgroundColor = "green"


    }

}

const passing_counter_three = () => {
    actual_time_3 = Math.floor(Math.random() * 5)
    counter_three.textContent = actual_time_3 + "counter_three"

    if(actual_time_3 == 2) {
        
        screen1.style.backgroundColor = "yellow"


    }

}

const passing_counter_four = () => {
    actual_time_4 = Math.floor(Math.random() * 5)
    counter_four.textContent = actual_time_4 + "counter_four"

    if(actual_time_4 == 2) {
        
        screen1.style.backgroundColor = "blue"


    }

}

setInterval(passing_counter_one, 1000)
setInterval(passing_counter_two, 1000)
setInterval(passing_counter_three, 1000)
setInterval(passing_counter_four, 1000)