import React, { useState } from 'react';
import './App.css';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <p>Sidebar Content Goes Here</p>
      </div>
      <div className="main-content">
        <p>Main Content Goes Here</p>
      </div>
    </div>
  );
}

export default Sidebar;