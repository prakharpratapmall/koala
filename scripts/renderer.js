//! RENDERER

//! Renderer Variables
//-----------------------------------------------
var gl; // Renderer reference
var animation; // Reference to the animation element
//-----------------------------------------------

//! Renderer Classes
//-----------------------------------------------

// Vertex Array Template Class
class VertexArray {
  // Vertex Array Constructor
  constructor() {
    this.VBO = 0;
  }

  // Generates the buffers in memory
  generateBuffers() {
    this.VBO = gl.createBuffer();
  }

  // Binds the VBO with data
  bindVertexBuffer(data) {
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  }

  // Defines data at attribute location
  setAttributeArray(location, count, stride, offset) {
    gl.vertexAttribPointer(location, count, gl.FLOAT, false, stride, offset);
    gl.enableVertexAttribArray(location);
  }

  // Draws the VBO as Triangles
  drawTriangles(count, start) {
    gl.drawArrays(gl.TRIANGLES, start, count);
  }
}
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

    // Render Scene componenents
    renderScene();

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
