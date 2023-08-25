import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

import { Model } from './model';

import './App.css';

function App() {

  return (
    <>
    <div>
      <h1>Warehouse Render</h1>
      <p>
        How to use: You can view the render completely in any direction (360º degrees) 
        with the mouse pointer and directly select the panel you prefer with a click, 
        it will change color to know that it is already selected.
      </p>
    </div>
      <div className="App">
        <Canvas>
          <Suspense fallback={null}>
            <Model position={[0, -2, -3]} />
            <OrbitControls />
            <Environment preset='sunset' background/>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
};

export default App;
