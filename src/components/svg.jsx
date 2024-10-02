

const SVG = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 50" width="200" height="100">
  
  <g id="envelope">
    
    <rect x="10" y="10" width="100" height="40" rx="5" ry="5" fill="#ffcc00" stroke="#555" strokeWidth="2"/>
   
    <polygon points="10,10 60,30 110,10" fill="#ff9900" stroke="#555" strokeWidth="2">
      <animate attributeName="points" dur="0.6s" repeatCount="indefinite"
        values="10,10 60,30 110,10; 10,15 60,35 110,15; 10,10 60,30 110,10"/>
    </polygon>
  </g>

  
  <animateTransform 
    attributeName="transform" 
    type="translate" 
    from="0,0" 
    to="150,-100" 
    dur="3s" 
    repeatCount="indefinite" />

  
  <animateTransform 
    attributeName="transform" 
    type="rotate" 
    values="0 60 30; 10 60 30; -10 60 30; 0 60 30" 
    dur="0.8s" 
    repeatCount="indefinite" />
</svg>
}

export default SVG