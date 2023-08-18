//! WEBGL RENDERER

//! Renderer Variables
//-----------------------------------------------
var canvas; // Canvas Reference
var gl; // Renderer reference
var windowWidth = 500; // Renderer window width
var windowHeight = 500; // Renderer window height
var animation; // Reference to the animation element
//-----------------------------------------------

//! UI Variables
//-----------------------------------------------
var sliderR;
var sliderB;
var sliderG;
//-----------------------------------------------

//! Scene Variables
//-----------------------------------------------
var bgColorR;
var bgColorG;
var bgColorB;
//-----------------------------------------------

//! Callback Functions
//-----------------------------------------------

// Resets the Background color
function resetBGColor() {
  bgColorR = 0.05;
  bgColorG = 0.1;
  bgColorB = 0.15;

  sliderR.querySelector("input").value = bgColorR * 255.0;
  sliderR.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(bgColorR * 100) / 100;

  sliderG.querySelector("input").value = bgColorG * 255.0;
  sliderG.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(bgColorG * 100) / 100;

  sliderB.querySelector("input").value = bgColorB * 255.0;
  sliderB.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(bgColorB * 100) / 100;
}
//-----------------------------------------------

//! Renderer Functions
//-----------------------------------------------

// Initialises the canvas element
function initCanvas() {
  canvas = document.getElementById("window");
  canvas.style.width = windowWidth + "px";
  canvas.style.height = windowHeight + "px";

  var ui_windows = document.getElementsByClassName("ui-window");
  var i = 0;
  while (i < ui_windows.length) {
    ui_windows[i].style.height = windowHeight + "px";
    i++;
  }

  sliderR = document.getElementById("bgRedSlider");
  sliderR.querySelector("input").oninput = function () {
    bgColorR = this.value / 255.0;
    sliderR.getElementsByClassName("slider-value")[0].innerHTML =
      Math.round(bgColorR * 100) / 100;
  };
  sliderG = document.getElementById("bgGreenSlider");
  sliderG.querySelector("input").oninput = function () {
    bgColorG = this.value / 255.0;
    sliderG.getElementsByClassName("slider-value")[0].innerHTML =
      Math.round(bgColorG * 100) / 100;
  };
  sliderB = document.getElementById("bgBlueSlider");
  sliderB.querySelector("input").oninput = function () {
    bgColorB = this.value / 255.0;
    sliderB.getElementsByClassName("slider-value")[0].innerHTML =
      Math.round(bgColorB * 100) / 100;
  };
}

// Initialises WebGL
function initWebGL(canvas) {
  try {
    // Setup WebGL Context
    gl = canvas.getContext("webgl2");

    // Set window dimensions
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
  } catch (e) {}
  if (!gl) {
    alert("ERR: UNABLE TO INITIALIZE WEBGL");
  }
}

// Draws the current scene
function drawScene() {
  if (animation) {
    window.cancelAnimationFrame(animation);
  }
  // Render Loop
  var animate = function () {
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight); // Set window size for drawing

    // Refresh window with background color
    gl.clearColor(bgColorR, bgColorG, bgColorB, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    animation = window.requestAnimationFrame(animate);
  };
  animate();
}

// Starts the renderer
function startWebGL() {
  // Get Canvas
  initCanvas();

  // Setup Renderer
  initWebGL(canvas);

  // Setup Scene
  resetBGColor();
  // Load Shaders
  // Load Vertex Buffers
  // Setup Actors
  // Setup Shader Data

  // Draw Scene
  drawScene();
}
//-----------------------------------------------
