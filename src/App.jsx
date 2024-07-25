import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import ClassListings from './components/ClassListings'; 
import ViewAllClasses from './components/ViewAllClasses';
const App = () => {
  return (
    <>
    < Navbar /> 
    <Hero /> {/*embedding the section*/}
    <HomeCards />
    <ClassListings />    
    <ViewAllClasses /> 

    

    {/* <!-- Browse Jobs --> */}
   

    
    </>
  )
  };

export default App