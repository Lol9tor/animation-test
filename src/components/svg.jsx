import {useEffect, useRef, useState} from 'react'
import AnimationWrapper from './AnimationWrapper'

const SVGAnimation = () => {
  const [isMultiple, setIsMultiple] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    ref.current = document.querySelector('svg')
    ref.current.pauseAnimations()
  }, []);

  const toggleAnimations = () => {
    if (ref.current.animationsPaused()) {
      ref.current.unpauseAnimations()
    } else {
      ref.current.pauseAnimations()
    }
  }

  return <>
    <AnimationWrapper name='SVG Animation' isMultiple={isMultiple} changeMultiple={setIsMultiple}/>
    <button onClick={toggleAnimations}>Animate</button>
    <div className='animation-svg'>
      <svg width="300" height={`${isMultiple ? '375' : '100'}`}>
        {!isMultiple ?
            <circle cx="25" cy="50" r="25" fill="red" key='single-anim'>
            <animate attributeName="cx" values="25; 225; 25" dur="2s" repeatCount="indefinite" name='move-animation'/>
          </circle>
          : <>
            <circle cx="25" cy="50" r="25" fill="red">
              <animate attributeName="cx" values="25; 225; 25" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="110" r="25" fill="red">
              <animate attributeName="cx" values="25; 225; 25" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="170" r="25" fill="red">
              <animate attributeName="cx" values="25; 225; 25" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="230" r="25" fill="red">
              <animate attributeName="cx" values="25; 225; 25" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="290" r="25" fill="red">
              <animate attributeName="cx" values="25; 225; 25" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="350" r="25" fill="red">
              <animate attributeName="cx" values="25; 225; 25" dur="2s" repeatCount="indefinite"/>
            </circle>
          </>
        }
      </svg>
    </div>
  </>
}

export default SVGAnimation