"use strict";

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};
/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelector("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglerNavBar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", togglerNavBar);

/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    if(this.window.scrollY > 100){
        header.classList.add("active");
    }else {
        header.classList.remove("active");
    }
})


/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSLider = function(currentSlider){

    const sliderContainer = currentSlider.querySelector("[data-slider-container");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

    let currentSlidePos = 0;

    const moveSliderItem = function(){
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    }


    /**
     * NEXT SLIDE
     */

    const slideNext = function(){
        const slideEnd = currentSlidePos >= sliderContainer.childElementCount -1;

        if(slideEnd){
            currentSlidePos = 0;
        }else {
            currentSlidePos++;
        }

        moveSliderItem();

        sliderNextBtn.addEventListener('click', slideNext);
    }

    


/**
     * PREV SLIDE
     */

const slidePrev = function(){

    if(currentSlidePos <= 0){
        currentSlidePos = sliderContainer.childElementCount - 1;
    }else {
        currentSlidePos--;
    }

    moveSliderItem();

    sliderPrevBtn.addEventListener('click', slidePrev);
};



const dontHaveExtraItem = sliderContainer.childElementCount <= 1;
if (dontHaveExtraItem){
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
}


for ( let i = 0, len = sliders.length; i < len; i++){ initSLider(sliders[i])};}