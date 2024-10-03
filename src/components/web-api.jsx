import {useEffect, useRef, useState} from 'react'
import AnimationWrapper from './AnimationWrapper.jsx'

const moveAnimations = [
  { transform: 'translateX(200px)', offset: 0.5 },
]

const animationProps = {
  duration: 2000,
  iterations: Infinity
}

const WebAPIAnimation = () => {
  const [isMultiple, setIsMultiple] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const animRef = useRef(null)
  const animation = useRef([])

  useEffect(() => {
    const els = animRef.current.querySelectorAll('.circle')
    els.forEach((el) => {
      const anim = el.animate(moveAnimations, animationProps)
      anim.pause()
      animation.current.push(anim)
    })
  }, [isMultiple]);

  const toggleAnimation = () => {
    if (!isAnimating) {
      animation.current.forEach((anim, i) => {
        // anim.playbackRate = 1 - i*0.05
        anim.play()
      })
      setIsAnimating(true)
    } else {
      animation.current.forEach(anim => anim.pause())
      setIsAnimating(false)
    }
  }

  return <>
    <AnimationWrapper name='WEB API Animation' isMultiple={isMultiple} changeMultiple={setIsMultiple}/>
    <button onClick={toggleAnimation}>Animate</button>
    <div className='animation-web-api'>
      {!isMultiple
        ? <div className='single' ref={animRef}>
          <div className='circle' key='single-one'></div>
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
        </div>
      }
    </div>
  </>
}

export default WebAPIAnimation