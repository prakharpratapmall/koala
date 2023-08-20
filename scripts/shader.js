//! SHADER

//! Shader Class
//-----------------------------------------------

// Shader Template Class
class Shader {
  // Shader constructor
  constructor() {
    this.shader = 0; // Shader Program Reference
  }

  // Uses this shader
  useShader() {
    gl.useProgram(this.shader);
  }

  // Compiles this shader component using given code
  shaderSetup(code, isVertex) {
    var shaderComp;

    if (isVertex) {
      shaderComp = gl.createShader(gl.VERTEX_SHADER);
    } else {
      shaderComp = gl.createShader(gl.FRAGMENT_SHADER);
    }

    gl.shaderSource(shaderComp, code);
    gl.compileShader(shaderComp);

    if (!gl.getShaderParameter(shaderComp, gl.COMPILE_STATUS)) {
      alert(gl.getShaderInfoLog(shaderComp));
      return null;
    }
    return shaderComp;
  }

  // Compiles the shader program
  initShader(vCode, fCode) {
    this.shader = gl.createProgram();
    var vShader = this.shaderSetup(vCode, true);
    var fShader = this.shaderSetup(fCode, false);

    gl.attachShader(this.shader, vShader);
    gl.attachShader(this.shader, fShader);
    gl.linkProgram(this.shader);
    if (!gl.getProgramParameter(this.shader, gl.LINK_STATUS)) {
      console.log(gl.getShaderInfoLog(vShader));
      console.log(gl.getShaderInfoLog(fShader));
    }
    this.useShader();
  }

  // Return location of input attribute in shader
  getLocation(attribute) {
    return gl.getAttribLocation(this.shader, attribute);
  }
}
//-----------------------------------------------
