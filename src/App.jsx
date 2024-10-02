import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <header className='header'>
        <ul>
          <li>
            <NavLink to={`/animations/css`}>CSS</NavLink>
          </li>
          <li>
            <NavLink to={`/animations/js`}>JS</NavLink>
          </li>
          <li>
            <NavLink to={`/animations/web-api`}>Web API</NavLink>
          </li>
          <li>
            <NavLink to={`/animations/svg`}>SVG</NavLink>
          </li>
          <li>
            <NavLink to={`/animations/canvas`}>CANVAS</NavLink>
          </li>
          <li>
            <NavLink to={`/animations/webgl`}>WebGL(2d, 3d)</NavLink>
          </li>
          <li>
            <NavLink to={`/animations/lottie`}>Lottie</NavLink>
          </li>
        </ul>
      </header>
      <div className="content">
        <Outlet/>
      </div>
    </>
  )
}

export default App
