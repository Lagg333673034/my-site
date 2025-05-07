import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './store/components/navbar/Navbar';
import AppRouter from './store/routes/AppRouter';

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
