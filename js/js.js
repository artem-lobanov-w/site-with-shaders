let cursor = document.getElementById('cursor');
let cursorBG = document.getElementById('cursor-bg');
cursor.style.width = "110px";
cursor.style.height = "110px";
cursorBG.style.width = "110px";
cursorBG.style.height = "110px";
cursor.style.transform = "scale(" + 0.2 + ")";

// let canvasHover = document.querySelectorAll("canvas");
// let buttonHover = document.querySelectorAll("button");
let arrayHover = [
    document.querySelectorAll("canvas"),
    document.querySelectorAll("button")
]
let heading = document.querySelectorAll("h2");

let rect0 = document.getElementById("canvas0");
let rect1 = document.getElementById("canvas1");
let rect2 = document.getElementById("canvas2");

const PI = 3.1415926535;

document.onmousemove = function(e) { 
    for (let i = 0; i<heading.length; i++) {
        // console.log("heading " + (i + 1));
        mouseHover(e,heading[i]);
    }
    // mouseCoordGL(e,rect0,rect1,rect2); 
}

window.onmousemove = function(e) { 
    cursorCoord(e);
}
function hoverCursor(elem) {
    for (let i = 0; i<elem.length; i++) {
        elem[i].onmouseenter = function() { 
            cursor.classList.add("cursorhover");
            cursor.style.transform = "scale(" + 1 + ")";
        }
        elem[i].onmouseleave = function() { 
            cursor.classList.remove("cursorhover");
            cursor.style.transform = "scale(" + 0.2 + ")";
        }
    }
}

function hoverCursorArray(elem) {
    for (let i = 0; i<elem.length; i++) {
        hoverCursor(elem[i]);
    }
}
hoverCursorArray(arrayHover);


let r = window.getComputedStyle(cursor,null).getPropertyValue("height");
r = parseInt(r,10);
let rBG = window.getComputedStyle(cursorBG,null).getPropertyValue("height");
rBG = parseInt(r,10);
console.log(rBG);

function mouseHover(e,heading) {
    let headOffset = heading.getBoundingClientRect();
    let offsetX = e.pageX - (headOffset.left + heading.offsetWidth/2);
    let offsetY = e.pageY - (headOffset.top + heading.offsetHeight/2);
    let factor;
    
    offsetX *= Math.pow(Math.min(Math.cos(3.14*offsetX/2.0),1.0-Math.abs(offsetX)),3.1)/1.2 * 200000; 
    offsetY *= Math.pow(Math.min(Math.cos(3.14*offsetY/2.0),1.0-Math.abs(offsetY)),3.1)/1.2; 
   
    // console.log("Math.cos(PI*offsetX/2.0) = " + Math.cos(PI*offsetX/2.0) + "; offsetY = " + offsetY);
    heading.style.transform = "translate(" + offsetX * 0.3 + "px, " + offsetY * 0.6 + "px)";
       
}


function cursorCoord(e) {
    let cursorCoordY = cursor.style.top = (e.clientY - r/2) + "px";
    let cursorCoordX = cursor.style.left = (e.clientX - r/2) + "px";
    cursorBG.style.top = cursorCoordY;
    cursorBG.style.left = cursorCoordX;
}




function mouseCoordGL(rect0,rect1,rect2) {
    rect0 = rect0.getBoundingClientRect();
	rect1 = rect1.getBoundingClientRect();
    rect2 = rect2.getBoundingClientRect();
	let x = parseInt(cursor.style.left,10);
	let y = parseInt(cursor.style.top,10);
    let x1;
	let y1;
    let x0;
	let y0;
	x1 = x - rect1.left;
	y1 = hight - (y - rect1.top);
    x0 = x - rect0.left;
	y0 = hight0 - (y - rect0.top);
    x = x - rect2.left;
	y = hight2 - (y - rect2.top); 
    uniforms.mouse.value.x = x;
	uniforms.mouse.value.y = y;
    uniforms.mouse1.value.x = x1;
	uniforms.mouse1.value.y = y1;
    uniforms.mouse0.value.x = x0;
	uniforms.mouse0.value.y = y0;
}

function renderMouseCoord() {
    mouseCoordGL(rect0,rect1,rect2);
	requestAnimationFrame( renderMouseCoord );
}
renderMouseCoord();

window.scrollBy(0, window.innerHeight);