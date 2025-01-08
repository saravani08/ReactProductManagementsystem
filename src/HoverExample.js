import React, { useState } from 'react';

function HoverExample() {
  const [isHovered, setIsHovered] = useState(false);

  
  const textStyle = {
    color: isHovered ? 'red' : 'blue'
  };

  return (
    <div align="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={textStyle}>
        {isHovered ? 'Mouse is over the element' : 'Hover over me'}
      </p>
    </div>
  );
}

export default HoverExample;

