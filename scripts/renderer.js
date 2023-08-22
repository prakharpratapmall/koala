//! RENDERER

//! Renderer Variables
//-----------------------------------------------
var gl; // Renderer reference
var animation; // Reference to the animation element

// Possible Render modes
const renderModes = {
  Point: 0,
  Line: 1,
  Fill: 2,
};
var renderMode = renderModes.Fill; // Current Render mode
//-----------------------------------------------

//! Renderer Classes
//-----------------------------------------------

// Vertex Array Template Class
class VertexArray {
  // Vertex Array Constructor
  constructor() {
    this.VAO = 0; // Vertex Array Object
    this.VBO = 0; // Vertex Buffer Object
    this.EBO = 0; // Element Buffer Object
  }

  // Generates the buffers in memory
  generateBuffers() {
    this.VAO = gl.createVertexArray();
    this.VBO = gl.createBuffer();
    this.EBO = gl.createBuffer();
  }

  // Binds the VAO
  bindVertexArray() {
    gl.bindVertexArray(this.VAO);
  }

  // Unbinds the VAO
  unbindVertexArray() {
    gl.bindVertexArray(null);
  }

  // Binds the VBO with data
  bindVertexBuffer(data) {
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  }

  // Unbinds the VBO
  unbindVertexBuffer() {
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }

  // Binds the EBO with data
  bindElementBuffer(data) {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.EBO);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW);
  }

  // Defines data at attribute location
  setAttributeArray(location, count, stride, offset) {
    gl.vertexAttribPointer(location, count, gl.FLOAT, false, stride, offset);
    gl.enableVertexAttribArray(location);
  }

  // Draws the VBO as Triangles
  drawTriangles(count, start) {
    this.bindVertexArray();
    gl.drawArrays(getRenderMode(), start, count);
    this.unbindVertexArray();
  }

  // Draws the VBO using indices
  drawIndices(count, start) {
    this.bindVertexArray();
    gl.drawElements(getRenderMode(), count, gl.UNSIGNED_SHORT, start);
    this.unbindVertexArray();
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

// Returns the current render mode
function getRenderMode() {
  var mode;
  switch (renderMode) {
    case renderModes.Point:
      mode = gl.POINTS;
      break;
    case renderModes.Line:
      mode = gl.LINE_LOOP;
      break;
    case renderModes.Fill:
      mode = gl.TRIANGLES;
      break;
    default:
      mode = gl.TRIANGLES;
      break;
  }
  return mode;
}

// Sets the Render Mode
function setRenderMode(mode) {
  renderMode = mode;
  setRenderModeUI(mode);
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
