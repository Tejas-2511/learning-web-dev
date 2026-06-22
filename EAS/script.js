const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resizeBtn");

function createGrid(size){

    // Remove old grid
    container.innerHTML = "";

    // Percentage sizing ensures it always fits
    const squarePercent = 100 / size;

    for(let i = 0; i < size * size; i++){

        const square = document.createElement("div");

        square.classList.add("square");

        square.style.width = `${squarePercent}%`;
        square.style.height = `${squarePercent}%`;

square.dataset.opacity = 0;

square.addEventListener("mouseenter", () => {

    let opacity = Number(square.dataset.opacity);

    opacity += 0.1;

    if(opacity > 1){
        opacity = 1;
    }

    square.dataset.opacity = opacity;

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    square.style.backgroundColor =
        `rgba(${r}, ${g}, ${b}, ${opacity})`;

});

        container.appendChild(square);
    }
}

// Default 16x16 grid
createGrid(16);

resizeBtn.addEventListener("click", () => {

    let size = prompt(
        "Enter number of squares per side (1-100)"
    );

    if(size === null){
        return;
    }

    size = Number(size);

    if(
        isNaN(size) ||
        size < 1 ||
        size > 100
    ){
        alert("Please enter a number between 1 and 100");
        return;
    }

    createGrid(size);

});