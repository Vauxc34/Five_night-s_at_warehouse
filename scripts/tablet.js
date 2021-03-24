const tablet = document.getElementById("tablet")
const btn_check = document.getElementById("check")
const btn_doors = document.getElementById("door")

btn_check.addEventListener("click", () => {
    tablet.style.top = "0px"
    btn_check.style.zIndex = "-2"
    btn_doors.style.zIndex = "-2"
})