import {useState, useRef} from 'react'
import AnimationWrapper from './AnimationWrapper'

const JSAnimation = () => {
  const [isMultiple, setIsMultiple] = useState(false)
  const animRef = useRef(null)

  const startAnimation = () => {
    const els = animRef.current.querySelectorAll('.circle');
    els.forEach((el) => {
      animate(el);
    })
  }

  const animate = (el) => {
    console.log(el);
    let x = 0
    function frame() {
      x += 3.5;
      el.style.translate = `${x}px 0px`;
      if (x <= 200) {
        requestAnimationFrame(frame)
      }
    }

    requestAnimationFrame(frame)
  }

  return <>
    <AnimationWrapper name='JS Animation' isMultiple={isMultiple} changeMultiple={setIsMultiple}/>
    <button onClick={startAnimation}>animate</button>
    <div className='animation-js'>
      {!isMultiple ? <div className='single' ref={animRef}>
        <div className='circle'></div>
      </div>
      : <div className="multiple" ref={animRef}>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>}
    </div>
  </>
}

export default JSAnimation