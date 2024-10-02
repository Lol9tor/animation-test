import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import App from './App.jsx'
import CSSAnimation from './components/css'
import JSAnimation from './components/js'
import SVGAnimation from './components/svg'
import WebAPIAnimation from './components/web-api'
import CanvasAnimation from './components/canvas'
import WebGLAnimation from './components/webgl'
import LottieAnimation from './components/lottie'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "animations/css",
        element: <CSSAnimation />,
      },
      {
        path: "animations/js",
        element: <JSAnimation />,
      },
      {
        path: "animations/svg",
        element: <SVGAnimation />,
      },
      {
        path: "animations/web-api",
        element: <WebAPIAnimation />,
      },
      {
        path: "animations/canvas",
        element: <CanvasAnimation />,
      },
      {
        path: "animations/webgl",
        element: <WebGLAnimation />,
      },
      {
        path: "animations/lottie",
        element: <LottieAnimation />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
