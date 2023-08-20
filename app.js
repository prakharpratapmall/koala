//! WEBGL RENDERER

//! Renderer Variables
//-----------------------------------------------
var windowWidth = 500; // Renderer window width
var windowHeight = 500; // Renderer window height
//-----------------------------------------------

//! Renderer Functions
//-----------------------------------------------

// Starts the renderer
function startRenderer() {
  //  Setup HTML Canvas
  initCanvas();
  initGUI();

  // Setup WebGL Renderer
  initWebGL(canvas);

  // Setup Scene
  initScene();

  // Draw Scene
  drawScene();
}
//-----------------------------------------------
