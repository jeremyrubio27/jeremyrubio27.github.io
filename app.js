const scrollOffset = 100;
const fadeIn = document.querySelectorAll('.js-scroll'); 
const elementinView = (el , scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset )
    );
};
const displayScrollElement = (fadeIn) => {
    fadeIn.classList.add('scrolled');
};
const hideScrollElement = (fadeIn) => {
    fadeIn.classList.remove("scrolled")    ;
  };
const handleScrollAnimation = () => {
  fadeIn.forEach((fadeIn)=>{
    if (elementinView(fadeIn,100)){ 
        displayScrollElement(fadeIn);
    }
    else {  
        hideScrollElement(fadeIn);
    }
  })
}
window.addEventListener("scroll", () =>{
    throttle(handleScrollAnimation,250);
});

let throttleTimer = false;

const throttle = (callback , time) => {
    if (throttleTimer) return;

    throttleTimer = true;

    setTimeout (()=>{
        callback(); 
        throttleTimer = false;
    }, time);
}