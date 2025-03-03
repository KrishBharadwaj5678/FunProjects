let circleIndicator = document.querySelector("#circleIndicator")
let circle = circleIndicator.querySelector("circle");
let textElement = document.querySelector("#scrollPrecentText");

let radius = circle.getAttribute("r");
let circumference = 2*Math.PI*radius;
circle.style.strokeDasharray = circumference;

let setProgess = (percent) => {
  let offset = circumference * (1-percent/100);
  circle.style.strokeDashoffset = offset;
  textElement.textContent = `${Math.round(percent)}%`;
}

window.addEventListener("scroll",(e)=>{
    let scrollTop = document.documentElement.scrollTop
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPrecent = (scrollTop / scrollHeight) * 100;
    console.log(scrollTop,scrollHeight,scrollPrecent);
    setProgess(scrollPrecent);
})

window.addEventListener("mousemove",(e) => {
  circleIndicator.style.top = `${e.clientY}px`;
  circleIndicator.style.left = `${e.clientX}px`;
})

setProgess(0);