import React, { useState } from 'react';

function ToggleTextWithColor() {
  const [isColorChanged, setColorChanged] = useState(false);


  const handleToggleColor = () => {
    setColorChanged(!isColorChanged);
  };

  
  const textStyle = {
    color: isColorChanged ? 'red' : 'blue'
  };

  
  return (
    <div>
      
      <h1 style={textStyle} onClick={handleToggleColor} align="center">
        Click me to toggle color
      </h1>
    </div>
  );
}

export default ToggleTextWithColor;
