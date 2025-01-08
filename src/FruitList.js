import React from 'react';

function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div align="center">
      <h2>List of Fruits</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
