let spans=[]
let total = 20;

for(let i=0; i<total; i++){
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
      span.style.left = `${x - 20}px`;
      span.style.top = `${y + index * 2}px`;  
    },delay);
  })

})