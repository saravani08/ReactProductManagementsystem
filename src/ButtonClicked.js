import React, { useState } from 'react';

function ButtonClicked() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button Clicked!');
  };

  return (
    <div align="center">
      <button onClick={handleClick}>Click me</button>
      <h1>{message}</h1>
    </div>
  );
}

export default ButtonClicked;
