// WebGL Renderer

var gl; // Renderer reference
var windowWidth = 500; // Renderer window width
var windowHeight = 500; // Renderer window height

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
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight); // Set window size for drawing

  // Refresh window with background color
  gl.clearColor(0.7, 0.9, 0.9, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

// Starts the renderer
function startWebGL() {
  // Get Canvas
  var canvas = document.getElementById("window");
  canvas.style.width = windowWidth + "px";
  canvas.style.height = windowHeight + "px";

  // Setup Renderer
  initWebGL(canvas);

  // Setup Scene

  // Draw Scene
  drawScene();
}
