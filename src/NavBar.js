import React from 'react';
import { Link } from 'react-router-dom'; 

function NavBar() {
  return (
    <nav style={{ backgroundColor: 'lightblue', paddingTop: '20px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/hello">Hello</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/toggletextwithcolor">ToggleTextWithColor</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/counter">Counter</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/greeting">Greeting</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/userlist">UserList</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/buttonclicked">ButtonClicked</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/hoverexample">HoverExample</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/fruitlist">FruitList</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/fruits">Fruits</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/todolist">TodoList</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
