let x = 0 , y = 0;
const mousefollower = document.querySelector(".mouse-follower")

addEventListener("mousemove",(e)=>{
    const {clientX,clientY} = e 
    x = clientX
    y = clientY

})

function far (){
    mousefollower.style.transform = `translate(${x}px,${y}px)` 
    requestAnimationFrame(far)
}

far()