import { Html, useProgress } from '@react-three/drei'
import { progress } from 'framer-motion';
import React from 'react'

const CanvasLoader = () => {
  const {progress} = useProgress();
  
  return (
    <Html className='bottom-16'>
      <span className='canvas-load'></span>
      <p style={{
        fontSize: 14,
        color: '#f1f1f1',
        fontWeight: 800,
        marginBlock: 100,
      }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader