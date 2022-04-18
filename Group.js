let imageElement = document.querySelector("img");
let blurElement = document.querySelector("#blur");
let opacityElement = document.querySelector("#opacity");
let grayScaleElement = document.querySelector("#grayscale");
let brightnessElement = document.querySelector("#brightness");
let saturationElement = document.querySelector("#saturation");

let allSliders = document.querySelectorAll("input");

let button = document.querySelector("button");

let containerOfSlides = document.querySelector(".slidecontainer");

containerOfSlides.addEventListener("input", UpdateImage);

function UpdateImage() {
    imageElement.style.filter = `blur(${blurElement.value}px) 
    brightness(${brightnessElement.value}%) grayscale(${grayScaleElement.value}%) 
    opacity(${opacityElement.value}%) saturate(${saturationElement.value})`;
};

button.addEventListener("click", function () {
    allSliders.forEach(element => {
        console.log(element + element.value);
        element.value = element.getAttribute("value");
    });
    UpdateImage();
});