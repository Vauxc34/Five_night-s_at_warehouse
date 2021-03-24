const tablet = document.getElementById("tablet")

const minutes_1 = document.querySelector("h1")
const hours_1 = document.querySelector("h2")

const btn_check = document.getElementById("check")
const btn_doors = document.getElementById("door")

const cm1tile = document.getElementById("cam1_tile")
const cm2tile = document.getElementById("cam2_tile")
const cm3tile = document.getElementById("cam3_tile")
const cm4tile = document.getElementById("cam4_tile")

const c1 = document.getElementById("counter1")
const c2 = document.getElementById("counter2")
const c3 = document.getElementById("counter4")
const c4 = document.getElementById("counter3")

let counter_actual_value_1 = 0
let counter_actual_value_2 = 0
let counter_actual_value_3 = 0
let counter_actual_value_4 = 0

btn_check.addEventListener("click", () => {

    /*hiding buttons and showing/hiding tablet*/

    tablet.style.top = "0px"
    btn_check.style.zIndex = -2
    btn_doors.style.zIndex = -2
    btn_check.style.opacity = 0
    btn_doors.style.opacity = 0
    minutes_1.style.zIndex = -2
    hours_1.style.zIndex = -2

    tablet.style.transition = "0.25s"

    /* */

    const hiding_menu = () => {

        if(event.keyCode === 27) {
            tablet.style.top = "-1000px"
            btn_check.style.zIndex = "2"
            btn_doors.style.zIndex = "2"
            btn_check.style.opacity = "1"
            btn_doors.style.opacity = "1"
        }
    
    }
    
    window.addEventListener("keydown", hiding_menu)

})

let counter_passing_one = () => {

    c1.textContent = counter_actual_value_1 + Math.floor(Math.random() * 5)

    if(c1.textContent == 2) {
        tablet.style.backgroundColor = "lawngreen"
    }

}

let counter_passing_two = () => {

    c2.textContent = counter_actual_value_2 + Math.floor(Math.random() * 5)

    if(c2.textContent == 2) {
        tablet.style.backgroundColor = "khaki"
    }

}

let counter_passing_three = () => {

    c3.textContent = counter_actual_value_3 + Math.floor(Math.random() * 5)

    if(c3.textContent == 2) {
        tablet.style.backgroundColor = "honeydew"
    }

}

let counter_passing_four = () => {

    c4.textContent = counter_actual_value_4 + Math.floor(Math.random() * 5)

    if(c4.textContent == 2) {
        tablet.style.backgroundColor = "aquamarine"
    }

}

const change_room1 = () => {
    tablet.style.backgroundColor = "green"

}

const change_room2 = () => {
    tablet.style.backgroundColor = "yellow"
}

const change_room3 = () => {
    tablet.style.backgroundColor = "white"
}

const change_room4 = () => {
    tablet.style.backgroundColor = "blue"
}

cm1tile.addEventListener("click", change_room1)
cm2tile.addEventListener("click", change_room2)
cm3tile.addEventListener("click", change_room3)
cm4tile.addEventListener("click", change_room4)

setInterval(counter_passing_one, 1000)
setInterval(counter_passing_two, 1000)
setInterval(counter_passing_three, 1000)
setInterval(counter_passing_four, 1000)





