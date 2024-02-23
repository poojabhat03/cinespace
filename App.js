import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';
import Login from './components/Login';
import Fourthpage from './Fourthpage';
import Register from './components/Register';
import Subscribe from './components/Subscribe'; 
import Payment from './components/Payment';
import Moviesearch from './components/Moviesearch'; 



const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/secondpage" element={<Secondpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fourthpage" element={<Fourthpage />} />  
        <Route path="/Register" element={<Register />} /> 
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/moviesearch" element={<Moviesearch />} />
      
      </Routes>
    </Router>
  );
};
export default App;