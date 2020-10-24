//Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Animation items
const title = document.querySelector(".title.title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Movement animation event
container.addEventListener('mousemove', (animation_event) =>{
let xAxis = (window.innerWidth / 2 - animation_event.pageX) /10;
let yAxis = (window.innerHeight / 2 - animation_event.pageY) /10;
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate in
container.addEventListener(`mouseenter`, animation_event =>{
    card.style.transition = 'none';
    //popout
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(30deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

//Animate out
container.addEventListener('mouseleave', animation_event =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});