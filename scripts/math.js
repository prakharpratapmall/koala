//! MATH

//! Math functions
//-----------------------------------------------

// Converts Hex Color to RGB Color
function convertHexToRGB(col) {
  var color = [0.0, 0.0, 0.0];
  color.r = parseInt(col.slice(1, 3), 16) / 255.0;
  color.g = parseInt(col.slice(3, 5), 16) / 255.0;
  color.b = parseInt(col.slice(5, 7), 16) / 255.0;
  return color;
}
//-----------------------------------------------
