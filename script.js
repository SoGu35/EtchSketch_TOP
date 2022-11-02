//defaults
let default_grid = 25;
var setcolor,
  current_Size = default_grid;
gridchange(default_grid);
// Change slider value on html
function sliderChange(value) {
  document.getElementById("slider_info").textContent = value;
  current_Size = value;
  gridchange(value);
}
// Clear grid first to prevent stacking and create new grid
function gridchange(value) {
  //clear grid
  cleargrid(value);
  // make a grid with size value * value
  grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${value}, 1fr)`;
  // set a class to each grid item by adding a div to the grid container
  for (let i = 0; i < value * value; i++) {
    const small_square = document.createElement("div");
    small_square.classList.add("div_grid");
    grid.appendChild(small_square);
  }
  hover();
}
// function to Clear grid and reset
function cleargrid(value) {
  grid.innerHTML = "";
  grid.style.backgroundColor = "transparent";
  if (value == null) {
    gridchange(current_Size);
  }
}
//color picker = setcolor
function changeColor(color) {
  setcolor = color;
  document.getElementById("pick_color").textContent = setcolor;
  hover();
}
//set random color = setcolor
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  setcolor = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("pick_color").textContent = setcolor ;
  ;
  hover();
}
// grid on hover = setcolor
function hover() {
  const square = document.querySelectorAll(".div_grid");
  square.forEach((square) => {
    square.addEventListener("mouseover", () => {
      console.log("hover");
      square.style.backgroundColor = setcolor;
    });
  });
}
// erase grid divs
function erase() {
  const square = document.querySelectorAll(".div_grid");
  square.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "transparent";
    });
  });
}

