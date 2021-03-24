const counter_one = document.getElementById("counter1")
const counter_two = document.getElementById("counter2")
const counter_three = document.getElementById("counter3")
const counter_four = document.getElementById("counter4")

const tablet_frame = document.getElementById("tablet")
let screen1 = document.getElementById("screen")

const minimap = document.getElementById("minimap")
const cam1 = document.getElementById("cam1")
const cam2 = document.getElementById("cam4")
const cam3 = document.getElementById("cam3")
const cam4 = document.getElementById("cam2")

const cam1_screen = document.getElementById("cam_screen1")
const cam2_screen = document.getElementById("cam_screen4")
const cam3_screen = document.getElementById("cam_screen3")
const cam4_screen = document.getElementById("cam_screen2")

cam1.addEventListener("click", () => {
    minimap.style.backgroundImage = "url(/textures/mini_map_cam1.png)"
})

cam2.addEventListener("click", () => {
    minimap.style.backgroundImage = "url(/textures/mini_map_cam2.png)"
})

cam3.addEventListener("click", () => {
    minimap.style.backgroundImage = "url(/textures/mini_map_cam3.png)"
})

cam4.addEventListener("click", () => {
    minimap.style.backgroundImage = "url(/textures/mini_map_cam4.png)"
})

const btn_show_hide = document.getElementById("check")
const doors = document.getElementById("door")

tablet_frame.style.top = "-1000px"

screen1.style.backgroundColor = 'green'

btn_show_hide.addEventListener("click", () => {

    tablet_frame.style.top = "0px"
    tablet_frame.style.transition = '0.25s'
    btn_show_hide.style.zIndex = "-1"
    doors.style.zIndex = "-1"

}) 


window.addEventListener("keydown", () => {
    if (event.keyCode === 27) {
        tablet_frame.style.top = "-1000px"
        btn_show_hide.style.zIndex = "2"
        doors.style.zIndex = "2"

    }
})

cam1.addEventListener("click", () =>{

    let actual_time_1 = 0

    screen1.style.backgroundColor = 'purple'

    const passing_counter_one = () => {
        actual_time_1 = Math.floor(Math.random() * 5)
        counter_one.textContent = actual_time_1 + "counter_one"
    
        if(actual_time_1 == 2) {
            
            screen1.style.backgroundColor = "Slateblue"
    
        } if(actual_time_1 == 1) {

            screen1.style.backgroundColor = "purple"

        } 
    
    }

    setInterval(passing_counter_one, 1000)

})

cam2.addEventListener("click", () =>{


    let actual_time_2 = 0

    screen1.style.backgroundColor = 'orange'

    const passing_counter_two = () => {
        actual_time_2 = Math.floor(Math.random() * 5)
        counter_two.textContent = actual_time_2 + "counter_two"
    
        if(actual_time_2 == 4) {
            
            screen1.style.backgroundColor = "tomato"
    
    
        }
    
    }

    setInterval(passing_counter_two, 1000)

})

cam3.addEventListener("click", () =>{

    let actual_time_3 = 0

    screen1.style.backgroundColor = 'blue'

    const passing_counter_three = () => {
        actual_time_3 = Math.floor(Math.random() * 5)
        counter_three.textContent = actual_time_3 + "counter_three"
        if(actual_time_3 == 1) {
            
            screen1.style.backgroundColor = "aquamarine"
    
        }
    }

    setInterval(passing_counter_three, 1000)


})

cam4.addEventListener("click", () =>{

    let actual_time_4 = 0

    screen1.style.backgroundColor = 'white'

    const passing_counter_four = () => {
        actual_time_4 = Math.floor(Math.random() * 5)
        counter_four.textContent = actual_time_4 + "counter_four"
        if(actual_time_4 == 1) {
            
            screen1.style.backgroundColor = "whitesmoke"
    
        }
    }

    setInterval(passing_counter_four, 1000)


})
