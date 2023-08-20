//! SCENE

//! Scene Variables
//-----------------------------------------------
var bgColorR; // Current BG Red Value
var bgColorG; // Current BG Green Value
var bgColorB; // Current BG Blue Value
//-----------------------------------------------

//! Scene GUI Variables
//-----------------------------------------------
var sliderR; // BG Red Channel Slider Reference
var sliderG; // BG Green Channel Slider Reference
var sliderB; // BG Blue Channel Slider Reference
//-----------------------------------------------

//! Scene GUI Functions
//-----------------------------------------------

// Resets the Background color
function resetBGColor() {
  bgColorR = 0.05;
  bgColorG = 0.1;
  bgColorB = 0.15;

  setColorSliderValue(sliderR, bgColorR);
  setColorSliderValue(sliderG, bgColorG);
  setColorSliderValue(sliderB, bgColorB);
}

// BG Red Channel Slider Callback
function sliderRChanged() {
  bgColorR = sliderR.querySelector("input").value / 255.0;
  sliderR.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(bgColorR * 100) / 100;
}

// BG Green Channel Slider Callback
function sliderGChanged() {
  bgColorG = sliderG.querySelector("input").value / 255.0;
  sliderG.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(bgColorG * 100) / 100;
}

// BG Blue Channel Slider Callback
function sliderBChanged() {
  bgColorB = sliderB.querySelector("input").value / 255.0;
  sliderB.getElementsByClassName("slider-value")[0].innerHTML =
    Math.round(bgColorB * 100) / 100;
}

// Initialises the scene specific ui
function initSceneGUI() {
  sliderR = document.getElementById("bgRedSlider");
  sliderR.querySelector("input").addEventListener("input", sliderRChanged);
  sliderG = document.getElementById("bgGreenSlider");
  sliderG.querySelector("input").addEventListener("input", sliderGChanged);
  sliderB = document.getElementById("bgBlueSlider");
  sliderB.querySelector("input").addEventListener("input", sliderBChanged);
  resetBGColor();
}
//-----------------------------------------------

//! Scene Functions
//-----------------------------------------------

// Initialises the scene components for renderering
function initScene() {
  // Load Shaders
  // Load Vertex Buffers
  // Setup Actors
  // Setup Shader Data
  // Setup GUI
  initSceneGUI();
}
//-----------------------------------------------
