//! SCENE

//! Scene Variables
//-----------------------------------------------
var bgColor; // Background color reference

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
uniform vec3 color;

void main() {
  fragColor = vec4(color, 1.0);
}`;

var objectColor; // Object color reference
//-----------------------------------------------

//! Scene GUI Variables
//-----------------------------------------------
var bgColorUI; // Background Color UI Reference
var renderModeText; // Render Mode UI Reference
var objectColorUI; // Object Color UI Reference
//-----------------------------------------------

//! Scene GUI Functions
//-----------------------------------------------

// Resets the Background color
function resetBGColor() {
  bgColorUI.value = "#0d1926";
  setBGColor();
}

function setBGColor() {
  bgColor = convertHexToRGB(bgColorUI.value);
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

// Sets Object Color variable from UI Value
function setObjectColor() {
  objectColor = convertHexToRGB(objectColorUI.value);
}

// Initialises the scene specific ui
function initSceneGUI() {
  bgColorUI = document.getElementById("backgroundColor");
  bgColorUI.addEventListener("input", setBGColor);
  setBGColor();
  renderModeText = document.getElementById("renderModeText");
  setRenderMode(2);
  objectColorUI = document.getElementById("objectColor");
  objectColorUI.addEventListener("input", setObjectColor);
  setObjectColor();
}
//-----------------------------------------------

//! Scene Functions
//-----------------------------------------------

// Initialises the scene components for renderering
function initScene() {
  // Load Shaders
  shader = new Shader();
  shader.initShader(vertexShaderCode, fragShaderCode);
  var posLoc = shader.getAttribLocation("aPosition");

  // Load Vertex Buffers
  buffer = initTriangleBuffer(posLoc);
  buffer2 = initRectangleBuffer(posLoc);

  // Setup Actors
  // Setup Shader Data

  // Setup GUI
  initSceneGUI();
}

// Renders all the objects of this scene
function renderScene() {
  // Refresh window with background color
  gl.clearColor(bgColor.r, bgColor.g, bgColor.b, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Calculate Data

  // Refresh Shaders
  shader.setColor("color", objectColor);

  // Draw Objects
  renderTriangleBuffer(buffer);
  renderRectangleBuffer(buffer2);
}
//-----------------------------------------------
