const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part1",
    start:"50% 50%",
    end:"150% 50%",
    scrub:true,
   //  markers:true,
    pin:true
}})
tl.to(".rotate-div",{
    rotate:-15,
    scale:1.3,
},'a')
tl.to("#row-div1",{
    marginTop:"-20%"
 },'a')
tl.to("#row-div2",{
   marginTop:"-30%"
},'a')
tl.to("#row-div3",{
    marginTop:"-40%"
 },'a')
 tl.to("#row-div4",{
    marginTop:"-45%"
 },'a')
 tl.to("#row-div5",{
    marginTop:"-50%"
 },'a')
 tl.to("#overlay-div ",{
    backgroundColor: "rgba(0, 0, 0, 0.37)"
 },'a')
 tl.to("#overlay-div h1",{
    opacity: "1",
 },'a')
 tl.to(".scrolling",{
   width: "100%",
},'a')

var tl2 = gsap.timeline({scrollTrigger:{
   trigger: "#part2",
   start:"10% 70%",
   end:"100% 50%",
   scrub:true,
   // markers:true,
}})
tl2.to(".rounded-div-wapper",{
   height:0,
   marginTop:0,
},'a')

var tl3 = gsap.timeline({scrollTrigger:{
   trigger: ".two",
   start:"0% 35%",
   end:"50% 50%",
   scrub:1,
   // markers:true,
},
})
tl3.to(".two .text-area-hover h1 ",{
   width:"100%",
})
tl3.to(".two .text-area-hover h2",{
   width:"100%",
   delay: -0.4,
})

var tl4 = gsap.timeline({scrollTrigger:{
   trigger: ".page4-big",
   start:"0% 35%",
   end:"50% 50%",
   scrub:1,
   // markers:true,
},
})
tl4.to(".text-area-hover-page4 h1 ",{
   width:"100%",
})


var tl6 = gsap.timeline({scrollTrigger:{
   trigger: ".page6",
   start:"0% 70%",
   end:"15% 50%",
   scrub:1,
   // markers:true,
},
})
tl6.to(".rounded-div-wapper-6 ",{
   height: 0,
   marginTop:0,
})


var tl7 = gsap.timeline({scrollTrigger:{
   trigger: ".page6",
   start:"0% 35%",
   end:"50% 50%",
   scrub:1,
   // markers:true,
},
})
tl7.to(".text-area-hover-6 h1 ",{
   width:"100%",
})
tl7.to(".text-area-hover-6 h2",{
   width:"100%",
   delay: -0.4,
})


let tl8 = gsap.timeline({
   scrollTrigger:{
       trigger: ".part-7",
       start:"50% 50%",
       end: "300% 50%",
       pin:true,
      //  markers: true,
       scrub: 1,
   },  
});
tl8.to("#demo",{
   bottom:"7%",
})
tl8.to(".our-work-txt-div",{
   height:"60vh",
}, 'height')
tl8.to(".our-work-txt",{
   height:"60vh",
}, 'height')
tl8.to("#our",{
   left:"0%",
}, 'height')
tl8.to("#work",{
   right:"0%",
}, 'height')
tl8.to(".scroll-img",{
   marginTop:"-300%",
})





var tl0 =gsap.timeline({
   delay:.5,
   duration:1
});
tl0
.from(".textarea-9 p",{
   opacity: 0
})
.from(".textarea-9 a",{
   opacity: 0
})
.from(".textarea-9 h2",{
   opacity: 0
})

