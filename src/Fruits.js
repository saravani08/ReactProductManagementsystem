import React, { useState, useEffect } from 'react';

function Fruits() {
  
  const [fruits, setFruits] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]);

  return (
    <div align="center">
      <h2>List of Fruits</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;

