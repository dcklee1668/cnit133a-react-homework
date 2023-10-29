// App.js
import React, { useState } from 'react';
import './App.css';
import CourseList from './components/CourseList';

function App() {

  const [isDarkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    // const root = document.getElementById('root');
    // root.className = `${!isDarkTheme ? 'dark' : 'light'}`;
    setDarkTheme(!isDarkTheme);
 };

  return (
    <div className={`theme ${isDarkTheme ? 'dark' : 'light'}`}>
      <CourseList />
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
}

export default App;
