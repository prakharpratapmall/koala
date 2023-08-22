//! SCENE

//! Scene Variables
//-----------------------------------------------
var bgColorR; // Current BG Red Value
var bgColorG; // Current BG Green Value
var bgColorB; // Current BG Blue Value

var buffer; // Object Buffer
var buffer2; // Second object buffer
var shader; // Shader Reference

// Vertex Shader Code
const vertexShaderCode = `#version 300 es
in vec3 aPosition;

void main() {
  gl_Position = vec4(aPosition, 1.0);
  gl_PointSize=5.0;
}`;

// Fragment Shader Code
const fragShaderCode = `#version 300 es
precision mediump float;
out vec4 fragColor;

void main() {
  fragColor = vec4(0.3, 0.6, 0.9, 1.0);
}`;
//-----------------------------------------------

//! Scene GUI Variables
//-----------------------------------------------
var sliderR; // BG Red Channel Slider Reference
var sliderG; // BG Green Channel Slider Reference
var sliderB; // BG Blue Channel Slider Reference
var renderModeText; // Render Mode UI Reference
//-----------------------------------------------

//! Scene GUI Functions
//-----------------------------------------------

// Resets the Background color
function resetBGColor() {
  bgColorR = 0.05;
  bgColorG = 0.1;
  bgColorB = 0.15;

  setColorSliderValue(sliderR, bgColorR);
  setColorSliderValue(sliderG, bgColorG);
  setColorSliderValue(sliderB, bgColorB);
}

// Sets the Render Mode UI Text
function setRenderModeUI(mode) {
  if (mode == 0) {
    setLabelValue(renderModeText, "Point");
  } else if (mode == 1) {
    setLabelValue(renderModeText, "Line");
  } else {
    setLabelValue(renderModeText, "Fill");
  }
}

// BG Red Channel Slider Callback
function sliderRChanged() {
  bgColorR = sliderR.querySelector("input").value / 255.0;
  sliderR.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(bgColorR * 100) / 100;
}

// BG Green Channel Slider Callback
function sliderGChanged() {
  bgColorG = sliderG.querySelector("input").value / 255.0;
  sliderG.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(bgColorG * 100) / 100;
}

// BG Blue Channel Slider Callback
function sliderBChanged() {
  bgColorB = sliderB.querySelector("input").value / 255.0;
  sliderB.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(bgColorB * 100) / 100;
}

// Initialises the scene specific ui
function initSceneGUI() {
  sliderR = document.getElementById("bgRedSlider");
  sliderR.querySelector("input").addEventListener("input", sliderRChanged);
  sliderG = document.getElementById("bgGreenSlider");
  sliderG.querySelector("input").addEventListener("input", sliderGChanged);
  sliderB = document.getElementById("bgBlueSlider");
  sliderB.querySelector("input").addEventListener("input", sliderBChanged);
  resetBGColor();
  renderModeText = document.getElementById("renderModeText");
  setRenderMode(2);
}
//-----------------------------------------------

//! Scene Functions
//-----------------------------------------------

// Initialises the scene components for renderering
function initScene() {
  // Load Shaders
  shader = new Shader();
  shader.initShader(vertexShaderCode, fragShaderCode);
  var posLoc = shader.getLocation("aPosition");

  // Load Vertex Buffers
  buffer = initTriangleBuffer();
  buffer2 = initRectangleBuffer();
  // Setup Actors
  // Setup Shader Data

  // Setup GUI
  initSceneGUI();
}

// Renders all the objects of this scene
function renderScene() {
  // Refresh window with background color
  gl.clearColor(bgColorR, bgColorG, bgColorB, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Draw Objects
  renderTriangleBuffer(buffer);
  renderRectangleBuffer(buffer2);
}
//-----------------------------------------------
