const tablet = document.getElementById("tablet")
const minutes_1 = document.querySelector("h1")
const hours_1 = document.querySelector("h2")
const btn_check = document.getElementById("check")
const btn_doors = document.getElementById("door")

btn_check.addEventListener("click", () => {

    /*hiding buttons and showing/hiding tablet*/

    tablet.style.top = "0px"
    btn_check.style.zIndex = "-2"
    btn_doors.style.zIndex = "-2"
    btn_check.style.opacity = "0"
    btn_doors.style.opacity = "0"
    minutes_1.style.zIndex = "-2"
    hours_1.style.zIndex = "-2"

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

