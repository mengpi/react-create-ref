import React from 'react';
import './style.css';
import FancyButton from './FancyButton';

export default function App() {
  const ref = React.createRef();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <FancyButton ref={ref}> Hello </FancyButton>
    </div>
  );
}
