let scene0;
let camera0;
let renderer0;
let scene;
let camera;
let renderer;
let scene2;
let camera2;
let renderer2;

let blockImageWave0 = document.getElementById("canvas-zero");
let blockImageWave = document.getElementById("canvas-first");
let blockImageWave2 = document.getElementById("canvas-second");

const shaderCode0 = document.getElementById("fragShader0").innerHTML;
const shaderCode = document.getElementById("fragShader").innerHTML;
const shaderCode2 = document.getElementById("fragShader2").innerHTML;

const textureURL0 = "/img/ivan-rohovchenko-EJ54uZ9tA5M-unsplash.jpg";
const textureURL = "/img/jason-leung-DQ4a0DKiRPs-unsplash.jpg";
const textureURL2 = "/img/eljin-wagan-yHHIvDVxLwQ-unsplash.jpg";
THREE.ImageUtils.crossOrigin = '';

const texture0 = THREE.ImageUtils.loadTexture(textureURL0);
const texture = THREE.ImageUtils.loadTexture(textureURL);
const texture2 = THREE.ImageUtils.loadTexture(textureURL2);

let hight0 = 1348;
let width0 = 1856;
function scene_setup0() {
	scene0 = new THREE.Scene();
	camera0 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	
	renderer0 = new THREE.WebGLRenderer();
	blockImageWave0.appendChild(renderer0.domElement).setAttribute("id", "canvas0");
	renderer0.setSize(width0, hight0);
}
scene_setup0();

let hight = 660;
let width = 1320;
function scene_setup() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	
	renderer = new THREE.WebGLRenderer();
	blockImageWave.appendChild(renderer.domElement)
		.setAttribute("id", "canvas1");
	renderer.setSize(width, hight);
}
scene_setup();

let hight2 = 660;
let width2= 1155;
function scene_setup2() {
	scene2 = new THREE.Scene();
	camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	
	renderer2 = new THREE.WebGLRenderer();
	blockImageWave2.appendChild(renderer2.domElement)
		.setAttribute("id", "canvas2");
	renderer2.setSize(width2, hight2);
}
scene_setup2();

uniforms = {
	mouse0: {type:'v3', value: new THREE.Vector3()},
    mouse1: {type:'v3', value: new THREE.Vector3()},
	mouse: {type:'v3', value: new THREE.Vector3()},
	tex0: { type:'t', value:texture0 },
    tex: { type:'t', value:texture },
	tex2: { type:'t', value:texture2 },
	res0: { type:'v2', value:new THREE.Vector2(width0,hight0)},
	res: { type:'v2', value:new THREE.Vector2(width,hight)},
    res2: { type:'v2', value:new THREE.Vector2(width2,hight2)},
	variable: {type:'v2', value: new THREE.Vector3()}
};
uniforms.mouse.value.z = 0.5;
uniforms.mouse1.value.z = 0.5;
uniforms.mouse0.value.z = 500;


const material0 = new THREE.ShaderMaterial({uniforms:uniforms, fragmentShader:shaderCode0});
const geometry0 = new THREE.PlaneGeometry(10,10);
const sprite0 = new THREE.Mesh(geometry0, material0);
scene0.add(sprite0);
camera0.position.z = 2;

function render0() {
	requestAnimationFrame( render0 );
	renderer0.render( scene0, camera0 );
}
render0();

const material = new THREE.ShaderMaterial({uniforms:uniforms, fragmentShader:shaderCode});
const geometry = new THREE.PlaneGeometry(10,10);
const sprite = new THREE.Mesh(geometry, material);
scene.add(sprite);
camera.position.z = 2;

function render() {
	uniforms.variable.value.x += 0.008;
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();

const material2 = new THREE.ShaderMaterial({uniforms:uniforms, fragmentShader:shaderCode2});
const geometry2 = new THREE.PlaneGeometry(10,10);
const sprite2 = new THREE.Mesh(geometry2, material2);
scene2.add(sprite2);
camera2.position.z = 2;

function render2() {
	requestAnimationFrame( render2 );
	renderer2.render( scene2, camera2 );
}
render2();




// function render3(e) {
// 	let xPosition = cursor.style.left = (e.pageX - r/2) + "px";
// 	if (e.type == 'mouseover') {
// 		cursor.style.transform  = "scale(" + 6 + ")";
// 	}
// 	let yPosition = cursor.style.top = (e.pageY - r/2) + "px";
// 	if (e.type == 'mouseout') {
// 		cursor.style.transform  = "scale(" + 1 + ")";
// 		// console.log("x = " + xPosition + " y = " + yPosition);
// 	}
// 	console.log(e.type);
// }
