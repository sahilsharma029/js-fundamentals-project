let rect = document.querySelector ("#center");
rect.addEventListener("mousemove",(details)=>{
    var rectlocation = rect.getBoundingClientRect();
    var insiderectvalue = details.clientX-rectlocation.left;
    if(insiderectvalue < rectlocation.width/2){
        var redcolor = gsap.utils.mapRange(0, rectlocation.width / 2, 255, 0,insiderectvalue);
        gsap.to(rect,{
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        });
    }
    else{
        var bluecolor = gsap.utils.mapRange(rectlocation.width / 2, rectlocation.width, 0, 255,insiderectvalue);
        gsap.to(rect,{
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: Power4,
        });
    }
})

rect.addEventListener("mouseleave", ()=>{
    gsap.to(rect,
    {
        backgroundColor:"white",
    }
    )
})