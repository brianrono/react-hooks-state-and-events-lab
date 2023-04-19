import React, { useState } from 'react';
import ShoppingList from './ShoppingList'; // assuming this is a component you've defined
import itemData from './itemData'; // assuming this is an array of data for the ShoppingList component

function App() {
  // State variable to store the current mode, initially set to "light"
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle toggling between dark and light mode
  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode); // Toggle the value of isDarkMode
  };

  // Conditional class name based on the value of isDarkMode
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Button for toggling dark mode */}
        <button onClick={handleModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
