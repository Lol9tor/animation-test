import {useState} from 'react'
import Lottie from 'react-lottie'

import AnimationWrapper from './AnimationWrapper'
import animationData from '../assets/jumping-circle.json'

const LottieAnimation = () => {
  const [isMultiple, setIsMultiple] = useState(false)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return <>
    <AnimationWrapper name='Lottie Animation' isMultiple={isMultiple} changeMultiple={setIsMultiple}/>
    <div className='animation-lottie'>
      {isMultiple
        ? <>
          <Lottie options={defaultOptions} height={100} width={100}/>
          <Lottie options={defaultOptions} height={200} width={200}/>
          <Lottie options={defaultOptions} height={300} width={300}/>
          <Lottie options={defaultOptions} height={400} width={400}/>
        </>
        : <Lottie options={defaultOptions} height={400} width={400}/>
      }
    </div>
  </>
}

export default LottieAnimation