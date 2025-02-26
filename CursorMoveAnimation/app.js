let spans=[];
let numSpans=20;

for(let i=0; i<numSpans;i++){
  let span = document.createElement("span");
  document.body.appendChild(span);
  spans.push(span);
}

document.addEventListener("mousemove",(e)=>{
  let x = e.clientX;
  let y = e.clientY;

  spans.forEach((span,index)=>{
    let delay = Math.random() * 500;
    setTimeout(()=>{
      span.style.left = `${x - 50}px`;
      span.style.top = `${y}px`;
      span.style.rotate = `${y + index * 18}deg`;
      span.style.filter = `hue-rotate(${y + index * 18}deg)`;
    },delay)
  })
 
})