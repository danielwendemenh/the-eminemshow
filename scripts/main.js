const navslide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('test');
    })

}

// nav slide end
//changeing iamge
const ccontainer = document.querySelector('.ccontainer');
const carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.slide');
const nextbtn = document.getElementById('Nextpic');
const Prevbtn = document.getElementById('Prevpic');
let i = 1;
var size = slides[i].clientWidth;
const inteval = 5000;
const firstclone = slides[0].cloneNode(true);
const lastclone = slides[slides.length -1].cloneNode(true);
let slideId ;
firstclone.id = 'first-clone';
lastclone.id = 'last-clone';
carousel.append(firstclone);
carousel.prepend(lastclone);
const getslides = ()=>document.querySelectorAll('.slide');
const startslide = ()=>{
    slideId = setInterval(()=>{
        movenextslide()
},inteval)
};
carousel.addEventListener('transitionend',()=>{
    slides = document.querySelectorAll('.slide');
    if(slides[i].id === firstclone.id){
        carousel.style.transition = 'none'; 
        i = 1;
        carousel.style.transform = `translateX(${-size * i}px)`;
    };
    slides = document.querySelectorAll('.slide');
    if(slides[i].id === lastclone.id){
        carousel.style.transition = 'none'; 
        i = slides.length-2;
        carousel.style.transform = `translateX(${-size * i}px)`;
    };

});
const movenextslide = ()=>{
    slides = document.querySelectorAll('.slide');
    if(i >= slides.length -1) return;
    carousel.style.transform = `translateX(${-size * i}px)`;
    i++;
    carousel.style.transition = 'all 0.8s ease';   
};
const movetoprev = ()=>{
    slides = document.querySelectorAll('.slide');
    if(i <= 0 ) return;
    carousel.style.transform = `translateX(${-size * i}px)`;
    i--;
    carousel.style.transition = 'all 0.8s ease';   
};

ccontainer.addEventListener('mouseenter',()=>{
   
    
});
ccontainer.addEventListener('hover',startslide);


nextbtn.addEventListener('click',movenextslide);
Prevbtn.addEventListener('click',movetoprev);


startslide();

