//! GUI

//! GUI Variables
//-----------------------------------------------
var canvas; // Canvas Reference
//-----------------------------------------------

//! GUI Functions
//-----------------------------------------------

// Initialises the Canvas element
function initCanvas() {
  canvas = document.getElementById("window");
  canvas.style.width = windowWidth + "px";
  canvas.style.height = windowHeight + "px";
}

// Initialises the GUI elements
function initGUI() {
  var ui_windows = document.getElementsByClassName("ui-window");
  var i = 0;
  while (i < ui_windows.length) {
    ui_windows[i].style.height = windowHeight + "px";
    i++;
  }
}

// Sets the Slider Value and UI to a value
function setSliderValue(slider, val) {
  slider.querySelector("input").value = val;
  slider.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(val * 100) / 100;
}

// Sets the Color Slider value and UI to a value
function setColorSliderValue(slider, val) {
  slider.querySelector("input").value = val * 255.0;
  slider.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(val * 100) / 100;
}
//-----------------------------------------------
