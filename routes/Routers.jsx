import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Cleaners from '../pages/Cleaners/Cleaners'
import CleanersDetails from '../pages/Cleaners/CleanersDetails'


import {Routes, Route} from 'react-router-dom'

const Routers = () => {
    return <Routes>
       <Route path ="/" element = {<Home/>}/> 
       <Route path ="/home" element = {<Home/>}/> 
       <Route path ="/cleaners" element = {<Cleaners/>}/> 
       <Route path ="/cleaners/:id" element = {<CleanersDetails/>}/> 
       <Route path ="/login" element = {<Login/>}/> 
       <Route path ="/register" element = {<Signup/>}/> 
       <Route path ="/contact" element = {<Contact/>}/> 
       <Route path ="/services" element = {<Services/>}/> 
      
    </Routes>
};

export default Routers;