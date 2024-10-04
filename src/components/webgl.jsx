import {useEffect, useState} from 'react'
import AnimationWrapper from './AnimationWrapper.jsx'

const WebGLAnimation = () => {
  const [isMultiple, setIsMultiple] = useState(false)

  useEffect(() => {
    const canvas = document.getElementById("glCanvas");
    const gl = canvas.getContext("webgl");

    // If no WebGL support, alert the user
    if (!gl) {
      alert("WebGL not supported");
    }

    // Vertex shader program
    const vertexShaderSource = `
    attribute vec2 a_position;
    uniform vec2 u_translation;
    void main(void) {
      gl_Position = vec4(a_position + u_translation, 0.0, 1.0);
    }
  `;

    // Fragment shader program
    const fragmentShaderSource = `
    void main(void) {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Red color
    }
  `;

    // Compile shader and create program
    function compileShader(gl, source, type) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('An error occurred compiling the shaders:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error('Unable to initialize the shader program:', gl.getProgramInfoLog(shaderProgram));
    }

    // Circle geometry (using triangle fan)
    const numSegments = 100;
    const radius = 0.1; // Radius of each circle
    const circleVertices = [0, 0]; // Center of the circle

    for (let i = 0; i <= numSegments; i++) {
      const angle = (i / numSegments) * Math.PI * 2;
      circleVertices.push(Math.cos(angle) * radius, Math.sin(angle) * radius);
    }

    const circleVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circleVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(circleVertices), gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(shaderProgram, 'a_position');
    const translationUniformLocation = gl.getUniformLocation(shaderProgram, 'u_translation');

    gl.useProgram(shaderProgram);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, circleVertexBuffer);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    // Variables for animation of each circle
    const circles = isMultiple ? [
      { translation: [-0.8, 0.7], speed: 0.01, direction: 1 },
      { translation: [-0.5, 0.3], speed: 0.015, direction: 1 },
      { translation: [-0.3, 0.1], speed: 0.012, direction: 1 },
      { translation: [0.0, -0.2], speed: 0.008, direction: 1 },
      { translation: [0.3, -0.4], speed: 0.01, direction: 1 },
      { translation: [0.5, -0.7], speed: 0.017, direction: 1 }
    ] : [{ translation: [-0.8, 0.7], speed: 0.01, direction: 1 },];

    function drawScene() {
      // Clear the canvas
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Draw each circle
      circles.forEach(circle => {
        // Update translation (move the circle left and right)
        circle.translation[0] += circle.speed * circle.direction;

        // Change direction when hitting the edges
        if (circle.translation[0] > 1 - radius || circle.translation[0] < -1 + radius) {
          circle.direction *= -1;
        }

        // Set the translation uniform for the current circle
        gl.uniform2fv(translationUniformLocation, circle.translation);

        // Draw the circle using triangle fan
        gl.drawArrays(gl.TRIANGLE_FAN, 0, numSegments + 2);
      });

      // Request the next animation frame
      requestAnimationFrame(drawScene);
    }

    // Set the clear color (black background)
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    drawScene();

  }, [isMultiple]);

  return <>
    <AnimationWrapper name='WebGL Animation' isMultiple={isMultiple} changeMultiple={setIsMultiple}/>
    <div className='animation-webgl'>
      <canvas id="glCanvas" width="400" height="400" style={{border: 'none'}} />
    </div>
  </>
}

export default WebGLAnimation