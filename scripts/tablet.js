
const tablet = document.getElementById("tablet")

const minutes_1 = document.querySelector("h1")
const hours_1 = document.querySelector("h2")

const btn_check = document.getElementById("check")
const btn_doors = document.getElementById("door")

const mini_map = document.getElementById("minimap")

const cm1tile = document.getElementById("cam1_tile")
const cm2tile = document.getElementById("cam2_tile")
const cm3tile = document.getElementById("cam3_tile")
const cm4tile = document.getElementById("cam4_tile")

const cam_screen1_ = document.getElementById("cam_screen1")
const cam_screen2_ = document.getElementById("cam_screen2")
const cam_screen3_ = document.getElementById("cam_screen3")
const cam_screen4_ = document.getElementById("cam_screen4")

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

    cam_screen1_.style.opacity = 1
    cam_screen1_.style.backgroundImage = "url(/textures/room_without_animatronic/cam1_rom.png)"

    /* */

    const hiding_menu = () => {

        if(event.keyCode === 27) {
            tablet.style.top = "-10000px"
            btn_check.style.zIndex = "2"
            btn_doors.style.zIndex = "2"
            btn_check.style.opacity = "1"
            btn_doors.style.opacity = "1"
        }
    
    }
    
    window.addEventListener("keydown", hiding_menu)

})

let counter_passing_one = () => {

    c1.textContent = counter_actual_value_1 + Math.floor(Math.random() * 15)

    if(c1.textContent == 2) {

        c1.textContent = "he goes"

    } 

    if(c1.textContent == 1) {

        c1.textContent = "he coming to you"

    }

}

/* let counter_passing_two = () => {

    c2.textContent = counter_actual_value_2 + Math.floor(Math.random() * 5)

    if(c2.textContent == 2) {
        c2.textContent = "he goes"
    }

}

let counter_passing_three = () => {

    c3.textContent = counter_actual_value_3 + Math.floor(Math.random() * 5)

    if(c3.textContent == 2) {
        c3.textContent = "he goes"
    }

}

let counter_passing_four = () => {

    c4.textContent = counter_actual_value_4 + Math.floor(Math.random() * 5)

    if(c4.textContent == 2) {
        c4.textContent = "he goes"
    }

} */

const change_room1 = () => {
    
    cam_screen1_.style.opacity = 1

    cam_screen2_.style.opacity = 0
    cam_screen3_.style.opacity = 0
    cam_screen4_.style.opacity = 0

    mini_map.style.backgroundImage = "url(/textures/mini_map_cam1.png)"

    cam_screen1_.style.backgroundImage = "url(/textures/room_without_animatronic/cam1_rom.png)"
    cam_screen1_.style.backgroundSize = "100% 100%"

}

const change_room2 = () => {
    
    cam_screen2_.style.opacity = 2

    cam_screen1_.style.opacity = 0
    cam_screen3_.style.opacity = 0
    cam_screen4_.style.opacity = 0

    mini_map.style.backgroundImage = "url(/textures/mini_map_cam2.png)"

    cam_screen2_.style.backgroundImage = "url(/textures/room_without_animatronic/cam2_rom.png)"
    cam_screen2_.style.backgroundSize = "100% 100%"

}

const change_room3 = () => {
    
    cam_screen3_.style.opacity = 4

    cam_screen1_.style.opacity = 0
    cam_screen2_.style.opacity = 0
    cam_screen4_.style.opacity = 0

    mini_map.style.backgroundImage = "url(/textures/mini_map_cam3.png)"
    cam_screen3_.style.backgroundImage = "url(/textures/room_without_animatronic/cam3_rom.png)"

    cam_screen3_.style.backgroundSize = "100% 100%"

}

const change_room4 = () => {
    
    cam_screen4_.style.opacity = 3

    cam_screen1_.style.opacity = 0
    cam_screen2_.style.opacity = 0
    cam_screen3_.style.opacity = 0

    mini_map.style.backgroundImage = "url(/textures/mini_map_cam4.png)"
    cam_screen4_.style.backgroundImage = "url(/textures/room_without_animatronic/cam4_rom.png)"

    cam_screen4_.style.backgroundSize = "100% 100%"
}

cm1tile.addEventListener("click", change_room1)
cm2tile.addEventListener("click", change_room2)
cm4tile.addEventListener("click", change_room3)
cm3tile.addEventListener("click", change_room4)

setInterval(counter_passing_one, 1000)
/* setInterval(counter_passing_two, 1000)
setInterval(counter_passing_three, 1000)
setInterval(counter_passing_four, 1000) */





