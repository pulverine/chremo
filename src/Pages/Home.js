import React from 'react'
import Navbar from '../Components/LoginNavbar';
import Login from '../Components/Login';


const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <Login/>
    </div>
  )
};

export default Home