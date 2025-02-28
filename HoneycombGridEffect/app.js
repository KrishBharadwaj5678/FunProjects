let container = document.querySelector(".container");

for(let i=0; i<15; i++){
  let row = document.createElement("div");
  row.classList.add("row");
  for(let j=0; j<15; j++){
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.filter = `hue-rotate(${j * 36}deg)`;
    row.appendChild(box);
  }
  container.appendChild(row);
}