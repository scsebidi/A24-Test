import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';

function App(props) {
  const [height, setHeight] = useState();
  const { width } = useWindowDimensions();
  return (
    
    <div style={{margin:'auto',border:'1px solid rgba(0, 0, 0, 1)', height:props.divHeight(height) }}>
      <span>height: {width}</span><br/>
        Set Height: <input onKeyDown={(event) => setHeight(event.target.value)}/>
    </div>
  );
}

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width  
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default App;
