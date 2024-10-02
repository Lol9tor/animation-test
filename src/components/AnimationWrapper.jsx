import PropTypes from 'prop-types'

const AnimationWrapper = ({ name, isMultiple, changeMultiple }) => {
  return <div>
    <h2>{name}</h2>
    <div className='animation-tabs'>
      <div className={isMultiple ? '' : 'active'} onClick={() => changeMultiple(false)}>
        Single Animation
      </div>
      <div className={isMultiple ? 'active' : ''} onClick={() => changeMultiple(true)}>
        Multiple Animation
      </div>
    </div>
  </div>
}

AnimationWrapper.propTypes = {
  isMultiple: PropTypes.bool,
  changeMultiple: PropTypes.func,
  name: PropTypes.string
}

export default AnimationWrapper