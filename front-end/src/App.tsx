import React from 'react';
import './App.css';
import Input from './components/Input';
import LoginPage from './pages/Login/LoginPage';

function App() {
  return (
    <div className="App">
      <Input
        onChange={ (e) => {} }
        value=""
        name="iauhdia"
      />
      <LoginPage />
    </div>
  );
}

export default App;
