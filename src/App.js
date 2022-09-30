import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className='App'>
      <h2>App</h2>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default App;