const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave")
const clearBtn = document.getElementById("jsClear");

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE; 

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = "INITIAL_COLOR";
ctx.fillStyle = "INITIAL_COLOR"; 
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;


function stopPainting(){
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorclick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    document.querySelector("#AppearColorName").innerHTML
    = `Get ${color}!`
}

function handleRangeChange(event){
    const range = event.target.value;
    ctx.lineWidth = range;
}

function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Paint";
    } else{
        filling = true;
        mode.innerText = "Fill";
    }
}

function handleCanvasClick(){
    if(filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event){
    event.preventDefault();
}

function handleSaveclick(){
    const image = canvas.toDataURL(); //defailt = png
    const link = document.createElement("a");
    link.href = image;
    link.download = "Paintboard[EXPORT]";
    link.click();
    
}

function handleClearclick(){
    if(!painting){
        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}
if(colors){
Array.from(colors).forEach(color => color.addEventListener("click", handleColorclick)
);
}

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveclick);
}

if(clearBtn){
    clearBtn.addEventListener("click", handleClearclick);
}