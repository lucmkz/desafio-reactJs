import React from 'react';
import './App.css';
import Counter from './componentes/counter'
import Header from './componentes/header'
import StickersAvailableApp from './componentes/stickersAvailable'
import Form from './componentes/form'

const App = () => (
  <div className="box">
    <Header />
    <StickersAvailableApp />
    <Counter /> 
    <Form/>
 </div>  
)

export default App;
