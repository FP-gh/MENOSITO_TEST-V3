
/* SELECTOR IMMAGINI */

    const buttons = document.querySelectorAll(".service-btn img");
    const sections = document.querySelectorAll(".service-section");

    let active = null;

    const defaultBtn = document.querySelector('[data-service="industrial"] img');

    defaultBtn.src = defaultBtn.dataset.hover;
    active = defaultBtn;

    buttons.forEach(img => {

    img.addEventListener("mouseenter", ()=>{
    if(img !== active){
    img.src = img.dataset.hover;
    }
    });

    img.addEventListener("mouseleave", ()=>{
    if(img !== active){
    img.src = img.dataset.normal;
    }
    });

    img.addEventListener("click", ()=>{

    buttons.forEach(i=>{
    i.src = i.dataset.normal;
    });

    sections.forEach(s=>{
    s.classList.remove("active");
    });

    img.src = img.dataset.hover;
    active = img;

    const target = img.parentElement.dataset.service;
    document.getElementById(target).classList.add("active");

    });

    });


/* SLIDER */

    document.querySelectorAll(".service-section").forEach(section=>{

    const track = section.querySelector(".track");
    const slides = section.querySelectorAll(".slide");
    const next = section.querySelector(".arrow.right");
    const prev = section.querySelector(".arrow.left");

    let index = 0;

    function update(){
    track.style.transform = `translateX(-${index*100}%)`;
    }

    next.addEventListener("click",()=>{
    index++;
    if(index>=slides.length){index=0;}
    update();
    });

    prev.addEventListener("click",()=>{
    index--;
    if(index<0){index=slides.length-1;}
    update();
    });

    });