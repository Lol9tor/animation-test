import {useEffect, useRef, useState} from 'react'
import AnimationWrapper from './AnimationWrapper.jsx'

const circle = {
  x: 50,
  y: 50,
  radius: 25,
  color: "red",
  dx: 2  // Speed of movement (change in x)
};

const circles = Array(8)
  .fill(null)
  .map((_, i) => ({ ...circle, y: circle.y + circle.y * i * 1.2 }))

const CanvasAnimation = () => {
  const [isMultiple, setIsMultiple] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const refContext = useRef(null)
  const refAnimation = useRef(null)

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    refContext.current = { ctx, width: canvas.width, height: canvas.height }
  }, [isMultiple]);

  const draw = () => {
    const { ctx, width, height } = refContext.current
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();

    const circleArr = isMultiple ? circles : [circles[0]]
    for (let c of circleArr) {
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      ctx.closePath();

      c.x += c.dx;

      if (c.x + c.radius > width || c.x - c.radius < 0) {
        c.dx = -c.dx;
      }
    }

    refAnimation.current = requestAnimationFrame(draw);
  }

  const toggleAnimation = () => {
    if (!showAnimation) {
      setShowAnimation(true)
      draw()
    } else {
      setShowAnimation(false)
      cancelAnimationFrame(refAnimation.current)
    }
  }

  return <>
    <AnimationWrapper name='Canvas Animation' isMultiple={isMultiple} changeMultiple={setIsMultiple}/>
    <button onClick={toggleAnimation}>Animate</button>
    <div className='animation-canvas'>
      <canvas id="canvas" width="400" height="500" style={{ border: 'none'}} key={`canvas-${isMultiple}`}/>
    </div>
  </>
}

export default CanvasAnimation