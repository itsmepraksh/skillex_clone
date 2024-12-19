var photo = document.querySelectorAll("img")

var lastPic = document.querySelector("#lastPic")
var dpart2 = document.querySelector("#d-part2")



dpart2.addEventListener('mouseenter',function(){
    gsap.to(lastPic, {
        width: "15%",
        duration: 0.7,
        delay:0.2
    })
})

dpart2.addEventListener('mouseleave',function(){
    gsap.to(lastPic, {
        width: "50%",
        duration: 0.7,
        delay:0.2
    })
})

// gsap.from

photo.forEach(function(elem){

    elem.addEventListener('mouseenter', function () {
        
        gsap.to(this, {
            width: "50%",
            duration: 0.7,
            delay:0.2
        })
    })

})


photo.forEach(function(elem){
    elem.addEventListener('mouseleave', function () {
    gsap.to(this, {
        width: "15%",
        duration: 0.7
    })
})
})