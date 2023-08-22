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
