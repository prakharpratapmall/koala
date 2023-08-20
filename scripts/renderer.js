//! RENDERER

//! Renderer Variables
//-----------------------------------------------
var gl; // Renderer reference
var animation; // Reference to the animation element
//-----------------------------------------------

//! Renderer Functions
//-----------------------------------------------

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
    alert("ERR: UNABLE TO INITIALIZE WEBGL"); // WebGL error message
  }
}

// Starts the Render Loop
function startRenderLoop() {
  var animate = function () {
    // Start of Frame
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight); // Set window size for drawing

    // Refresh window with background color
    gl.clearColor(bgColorR, bgColorG, bgColorB, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // End of Frame
    animation = window.requestAnimationFrame(animate);
  };
  animate(); // Next Frame
}

// Draws the current scene
function drawScene() {
  if (animation) {
    window.cancelAnimationFrame(animation);
  }
  // Render Loop
  startRenderLoop();
}
//-----------------------------------------------
