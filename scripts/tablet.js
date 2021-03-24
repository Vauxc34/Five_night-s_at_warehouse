const tablet = document.getElementById("tablet")
const btn_check = document.getElementById("check")
const btn_doors = document.getElementById("door")

btn_check.addEventListener("click", () => {

    /*hiding buttons and showing/hiding tablet*/

    tablet.style.top = "0px"
    btn_check.style.zIndex = "-2"
    btn_doors.style.zIndex = "-2"

    tablet.style.transition = "0.5s"

    /* */

})

const hiding_menu = () => {

    if(event.keyCode === 27) {
        tablet.style.top = "-1000px"
        btn_check.style.zIndex = "2"
        btn_doors.style.zIndex = "2"
    }

}

window.addEventListener("keydown", hiding_menu)