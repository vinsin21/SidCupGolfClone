let crs = document.querySelector(".cursor")
let blur = document.querySelector(".cursor-bg")
document.addEventListener("mousemove", function (dets) {
    crs.style.left = dets.x + 30 + "px"
    crs.style.top = dets.y + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"

})

gsap.to(".nav", {
    backgroundColor: "black",
    duration: 0.3,
    height: "95px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }

})

gsap.to(".main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }


})


const navH4 = document.querySelectorAll(".nav h4");

navH4.forEach(function (ele) {

    ele.addEventListener("mouseenter", function () {
        crs.style.scale = 3;
        crs.style.border = "1px solid #fff";
        crs.style.backgroundColor = "transparent"
    })
    ele.addEventListener("mouseleave", function () {
        crs.style.scale = 1;
        crs.style.border = "0px solid #95c11e";
        crs.style.backgroundColor = "#95c11e"
    })

})


gsap.from(".about-us img,.about-us-in", {
    y: 50,
    opacity: 0,
    //stagger: 0.2,
    duration: 2,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        // markers: true,
        scrub: 3,
        start: "top 60%",
        end: "top 58%"

    }
})

gsap.from(".card-container .card", {
    scale: 0.8,
    opacity: 0,
    duration: 4,
    scrollTrigger: {
        trigger: ".card-container",
        scroller: "body",
        // markers: true,
        scrub: 3,
        start: "top 70%",
        end: "top 65%"

    }
})


gsap.from("#colon1", {
    y: -90,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        scrub: 3,
        start: "top 50%",
        end: "top 45%"

    }
})

gsap.from("#colon2", {
    y: 90,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        scrub: 3,
        start: "top 50%",
        end: "top 45%"
    }
})

// gsap.from(".page3 p",{
//     // WE will add that when mouse move left right the text of p also move left right
// })


gsap.from(".page4 h1", {

    y: 35,
    scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        // markers: true,
        scrub: 3,
        start: "top 70%",
        end: "top 68%%"
    }
})