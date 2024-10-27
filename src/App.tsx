import React from 'react';
import Button from './components/Button';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Button>
        Primary Button
      </Button>

      <Button
        primary={false}
        borderRadius="8px"
        padding="12px 30px"
        hoverColor="purple"
        
        
      >
        Secondary Button
      </Button>
    </div>
  );
};

export default App;
