import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hello from './Hello';
import ToggleTextWithColor from './ToggleTextWithColor';
import Counter from './Counter';
import Greeting from './Greeting';
import Welcome from './Welcome';
import UserList from './UserList';
import ButtonClicked from './ButtonClicked';
import HoverExample from './HoverExample';
import FruitList from './FruitList';
import Fruits from './Fruits';
import TodoList from './TodoList';
import Form from './Form';
import Home from './Home';
import './App.css';
import NavBar from './NavBar';
import Hello1 from './Hello1';

function App() {
  
  return (
    
    <Router>
      <NavBar/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/hello" element={<Hello1 />} />
      <Route path="/toggletextwithcolor" element={<ToggleTextWithColor />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/greeting" element={<Greeting isLoggedIn={true} />} />
      <Route path="/welcome" element={<Welcome name="Jane" />} />
      <Route path="/userlist" element={<UserList />} />
      <Route path="/buttonclicked" element={<ButtonClicked />} />
      <Route path="/hoverexample" element={<HoverExample />} />
      <Route path="/fruitlist" element={<FruitList />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/form" element={<Form />} />
      
    </Routes>
  </Router>
  
    
  );
}

export default App;
