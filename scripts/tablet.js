const tablet = document.getElementById("tablet")

const scr = document.getElementById("screen")

const minutes_1 = document.querySelector("h1")
const hours_1 = document.querySelector("h2")

const btn_area = document.getElementById("btn_container")
const btn_check = document.getElementById("check")
const btn_mask_ = document.getElementById("door")

const room = document.getElementById("room")

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
const c3 = document.getElementById("counter3")
const c4 = document.getElementById("counter4")

let counter_actual_value_1 = 0
let counter_actual_value_2 = 0
let counter_actual_value_3 = 0
let counter_actual_value_4 = 0

btn_check.addEventListener("click", () => {

    /*hiding buttons and showing/hiding tablet*/

    tablet.style.top = "0px"

    btn_area.style.opacity = 0

    btn_check.style.zIndex = -2
    btn_mask_.style.zIndex = -2

    btn_check.style.opacity = 0
    btn_mask_.style.opacity = 0

    minutes_1.style.zIndex = -2
    hours_1.style.zIndex = -2

    hours_1.style.opacity = 0
    minutes_1.style.opacity = 0

    room.style.backgroundImage = "url(/textures/black_screen.png)"

    room.style.transition = "0.25s"

    tablet.style.transition = "0.5s"

    cam_screen1_.style.opacity = 0.8

    cam_screen1_.style.backgroundImage = "url(/textures/room_without_animatronic/cam1_rom.png)"

    if(cam_screen2_.style.opacity == 0.8) {
        
        cam_screen1_.style.opacity = 0

    }

    if(cam_screen3_.style.opacity == 0.8) {
        
        cam_screen1_.style.opacity = 0

    }

    if(cam_screen4_.style.opacity == 0.8) {
        
        cam_screen1_.style.opacity = 0

    }


    /* */

    const hiding_menu = () => {

        if(event.keyCode === 27) {
            tablet.style.top = "-10000px"
            room.style.backgroundImage = "url(textures/room.png)"

            btn_check.style.zIndex = 2
            btn_mask_.style.zIndex = 2

            btn_check.style.opacity = 1
            btn_mask_.style.opacity = 1
            btn_area.style.opacity = 1

            hours_1.style.opacity = 1
            minutes_1.style.opacity = 1

            tablet.style.transition = "0.25s"

        }
    
    } 
    
    window.addEventListener("keydown", hiding_menu)

})

let counter_passing_one = () => {

    c1.textContent = counter_actual_value_1 + Math.floor(Math.random() * 5)

    if(c1.textContent == 0) {

        //Room with animatronic

        cam_screen1_.style.backgroundImage = "url(/textures/room_without_animatronic/cam1_rom.png)"
        cam_screen2_.style.backgroundImage = "url(/textures/room_without_animatronic/cam2_rom.png)"
        cam_screen3_.style.backgroundImage = "url(/textures/room_without_animatronic/cam3_rom.png)"
        cam_screen4_.style.backgroundImage = "url(/textures/room_without_animatronic/cam4_rom.png)"
        
    }

    if(c1.textContent == 1) {

        c1.textContent = "he goes"

    }if(c1.textContent == "he goes") {

        //Room without animatronic

        cam_screen3_.style.backgroundImage = "url(/textures/room_with_animatronic/cam3_rom.png)"

        //

        cam_screen4_.style.backgroundImage = "url(/textures/room_without_animatronic/cam4_rom.png)"
        cam_screen2_.style.backgroundImage = "url(/textures/room_without_animatronic/cam2_rom.png)"
        cam_screen1_.style.backgroundImage = "url(/textures/room_without_animatronic/cam1_rom.png)"

        c1.textContent = 2

    }

    if(c1.textContent == 2) {

        //Room 2 with animatronic

        cam_screen2_.style.backgroundImage = "url(/textures/room_with_animatronic/cam2_rom.png)"

        //

        cam_screen1_.style.backgroundImage = "url(/textures/room_without_animatronic/cam1_rom.png)"
        cam_screen3_.style.backgroundImage = "url(/textures/room_with_animatronic/cam3_rom.png)"
        cam_screen4_.style.backgroundImage = "url(/textures/room_without_animatronic/cam4_rom.png)"


    }

    if(c1.textContent == 3) {

        //Room 1 with animatronic

        cam_screen1_.style.backgroundImage = "url(/textures/room_with_animatronic/cam1_rom.png)"

        //

        cam_screen2_.style.backgroundImage = "url(/textures/room_without_animatronic/cam2_rom.png)"
        cam_screen3_.style.backgroundImage = "url(/textures/room_with_animatronic/cam3_rom.png)"
        cam_screen4_.style.backgroundImage = "url(/textures/room_without_animatronic/cam4_rom.png)"

        c1.textContent = 3

    }

    if(c1.textContent == 4) {

        //Room 4 with animatronic

        cam_screen4_.style.backgroundImage = "url(/textures/room_with_animatronic/cam4_rom.png)"

        //

        cam_screen1_.style.backgroundImage = "url(/textures/room_without_animatronic/cam1_rom.png)"
        cam_screen2_.style.backgroundImage = "url(/textures/room_without_animatronic/cam2_rom.png)"
        cam_screen3_.style.backgroundImage = "url(/textures/room_with_animatronic/cam3_rom.png)"

        //

        setInterval(counter_passing_two, 10000)

    } 

}

 let counter_passing_two = () => {

    c2.textContent = counter_actual_value_2 + Math.floor(Math.random() * 10)

    //



    if(c2.textContent == 10) {

        c2.textContent = "he is near you"

        room.style.backgroundImage = "url(/textures/room_doge_left_side.png)"

        cam_screen1_.style.backgroundImage = "url(/textures/room_without_animatronic/cam1_rom.png)"
        cam_screen2_.style.backgroundImage = "url(/textures/room_without_animatronic/cam2_rom.png)"
        cam_screen3_.style.backgroundImage = "url(/textures/room_with_animatronic/cam3_rom.png)"
        cam_screen4_.style.backgroundImage = "url(/textures/room_without_animatronic/cam4_rom.png)"

        console.log("left")

        setInterval(counter_passing_three, 1000)

        /* jumpscare */

        /* if(room.style.backgroundImage = "url(/textures/room_doge_left_side.png)") {

            setInterval(counter_passing_three, 2000)

        } */


    } else {

        room.style.backgroundImage = "url(/textures/room.png)"

    }

    if(c2.textContent == 5) {

        c2.textContent = "he is nearest you"

        room.style.backgroundImage = "url(/textures/room_doge_right_side.png)"

        cam_screen1_.style.backgroundImage = "url(/textures/room_without_animatronic/cam1_rom.png)"
        cam_screen2_.style.backgroundImage = "url(/textures/room_without_animatronic/cam2_rom.png)"
        cam_screen3_.style.backgroundImage = "url(/textures/room_with_animatronic/cam3_rom.png)"
        cam_screen4_.style.backgroundImage = "url(/textures/room_without_animatronic/cam4_rom.png)"

        console.log("right")

        setInterval(counter_passing_three, 1000)

    }else {

        room.style.backgroundImage = "url(/textures/room.png)"

    }

}

let counter_passing_three = () => {

    c3.textContent = counter_actual_value_3++

    if (counter_actual_value_3 == 5) {
        
    jumpscare.style.bottom = "0px"

    mask.style.bottom = "-1000px"

    /* if(jumpscare.style.bottom = "0px") {

    setInterval(ending_game, 1000)

    const ending_game = () => { location.href = "you_are_loser.html" }

    } */

    clearInterval(counter_actual_value_3)

    } else {

        clearInterval(counter_actual_value_3)

    }

}


/* let counter_passing_four = () => {

    c4.textContent = counter_actual_value_4 + Math.floor(Math.random() * 5)

    if(c4.textContent == 2) {
        c4.textContent = "he goes"
    }

} */

const change_room1 = () => {
    
    cam_screen1_.style.opacity = 0.8

    cam_screen2_.style.opacity = 0
    cam_screen3_.style.opacity = 0
    cam_screen4_.style.opacity = 0

    mini_map.style.backgroundImage = "url(/textures/mini_map_cam1.png)"

    room.style.backgroundImage = "url(/textures/black_screen.png)"


}

const change_room2 = () => {
    
    cam_screen2_.style.opacity = 0.8

    cam_screen1_.style.opacity = 0
    cam_screen3_.style.opacity = 0
    cam_screen4_.style.opacity = 0

    mini_map.style.backgroundImage = "url(/textures/mini_map_cam2.png)"

    room.style.backgroundImage = "url(/textures/black_screen.png)"

}

const change_room3 = () => {
    
    cam_screen3_.style.opacity = 0.8

    cam_screen1_.style.opacity = 0
    cam_screen2_.style.opacity = 0
    cam_screen4_.style.opacity = 0

    mini_map.style.backgroundImage = "url(/textures/mini_map_cam3.png)"

    room.style.backgroundImage = "url(/textures/black_screen.png)"

    if(c1.textContent == "he goes") {

        cam_screen3_.style.backgroundImage = "url(/textures/room_with_animatronic/cam3_rom.png)"

    }


}

const change_room4 = () => {
    
    cam_screen4_.style.opacity = 0.8

    cam_screen1_.style.opacity = 0
    cam_screen2_.style.opacity = 0
    cam_screen3_.style.opacity = 0

    mini_map.style.backgroundImage = "url(/textures/mini_map_cam4.png)"

    room.style.backgroundImage = "url(/textures/black_screen.png)"


}

cm1tile.addEventListener("click", change_room1)
cm2tile.addEventListener("click", change_room2)
cm4tile.addEventListener("click", change_room3)
cm3tile.addEventListener("click", change_room4)

setInterval(counter_passing_one, 1000)
/* 
setInterval(counter_passing_four, 1000) */

/* mask */

        const mask = document.getElementById("mask")
        const btn_mask = document.getElementById("door")

        const mask_on = () => {

        mask.style.bottom = "0px"

        }

        btn_mask.addEventListener("click", mask_on)

        const mask_off = () => {
            
        if(event.keyCode === 77) {

        mask.style.bottom = "-1000px"

        }

        if(mask.style.bottom = "-1000px") {

            room.style.backgroundImage = "url(/textures/room.png)"

            clearInterval(counter_actual_value_1)
            clearInterval(counter_actual_value_2)
            clearInterval(counter_actual_value_3)

        }

        }

        document.body.addEventListener("keydown", mask_off)

    /* jumpscare */

    const jumpscare = document.getElementById("jumpscare")



