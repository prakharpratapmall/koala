//! PRIMITIVE

//! Primitive Variables
//-----------------------------------------------

// Triangle Primitive Data
const triangleBufferData = new Float32Array([
  0.0, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0,
]);

// Rectangle Primitive Data
const rectangleBufferData = new Float32Array([
  0.5, 0.5, 0.0, -0.5, 0.5, 0.0, 0.5, -0.5, 0.0, -0.5, -0.5, 0.0,
]);
const rectangleIndices = new Uint16Array([0, 1, 2, 1, 3, 2]);
//-----------------------------------------------

//! Primitive Functions
//-----------------------------------------------

// Initialises the Triangle buffer
function initTriangleBuffer(loc) {
  var buffer = new VertexArray();
  buffer.generateBuffers();
  buffer.bindVertexArray();
  buffer.bindVertexBuffer(triangleBufferData);
  buffer.setAttributeArray(loc, 3, 3 * 4, 0);
  buffer.unbindVertexBuffer();
  buffer.unbindVertexArray();
  return buffer;
}

// Renders the Triangle buffer
function renderTriangleBuffer(buffer) {
  buffer.drawTriangles(3, 0);
}

// Initialises the Rectangle buffer
function initRectangleBuffer(loc) {
  var buffer = new VertexArray();
  buffer.generateBuffers();
  buffer.bindVertexArray();
  buffer.bindVertexBuffer(rectangleBufferData);
  buffer.setAttributeArray(loc, 3, 3 * 4, 0);
  buffer.bindElementBuffer(rectangleIndices);
  buffer.unbindVertexBuffer();
  buffer.unbindVertexArray();
  return buffer;
}

// Renders the Rectangle buffer
function renderRectangleBuffer(buffer) {
  buffer.drawIndices(6, 0);
}
//-----------------------------------------------
