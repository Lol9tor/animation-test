import AnimationWrapper from './AnimationWrapper.jsx'
import {useState} from 'react'

const CSSAnimation = () => {
  const [isMultiple, setIsMultiple] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  return <>
    <AnimationWrapper name='Css Animation' isMultiple={isMultiple} changeMultiple={setIsMultiple}/>
    <button onClick={()=>setShowAnimation((prev => !prev))}>animate</button>
    <div className='animation-css'>
      {!isMultiple ? <div className='single'>
          <div className={`circle ${showAnimation ? 'animated' : ''}`}></div>
        </div>
        : <div className="multiple">
          <div className={`circle ${showAnimation ? 'animated' : ''}`}></div>
          <div className={`circle ${showAnimation ? 'animated' : ''}`}></div>
          <div className={`circle ${showAnimation ? 'animated' : ''}`}></div>
          <div className={`circle ${showAnimation ? 'animated' : ''}`}></div>
          <div className={`circle ${showAnimation ? 'animated' : ''}`}></div>
          <div className={`circle ${showAnimation ? 'animated' : ''}`}></div>
          <div className={`circle ${showAnimation ? 'animated' : ''}`}></div>
          <div className={`circle ${showAnimation ? 'animated' : ''}`}></div>
        </div>}
    </div>
  </>
}

export default CSSAnimation