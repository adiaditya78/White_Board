let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let isDawning = false;
let lastX = 0;
let lastY = 0;
let container = document.getElementById("canvas-con");
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;
ctx.lineWidth = 6;
ctx.lineCap = 'round';
ctx.strokeStyle = "#fff";

canvas.addEventListener("mousedown", (e) =>{
    isDawning = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", (e) =>{
    if(!isDawning) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener("mouseleave", () =>{
    isDawning = false;
})
canvas.addEventListener("mouseup", () =>{
    isDawning = false;
})

function pen(){
    ctx.strokeStyle = document.getElementById("colorChanger").value;
    let size = document.getElementById('penSize');
    size.title = size.value;
    ctx.lineWidth = size.value;  
    // canvas.style.cursor = "url('pen-solid-full.svg') 10 10, auto" 
}
function eraser(){
    ctx.strokeStyle = "#fff";
    let size = document.getElementById('eraserSize');
    size.title = size.value;
    ctx.lineWidth = size.value;
    let canvas = document.getElementById("myCanvas");
    // canvas.style.cursor = "url('circle-regular-full.svg') 10 10, auto";
}