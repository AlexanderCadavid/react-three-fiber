import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'

const Cam = () => {
  return (
    <PerspectiveCamera
      makeDefault
        position = { [5, 5, 5] } 
        fov= {50}
    />
  )
}

export default Cam
