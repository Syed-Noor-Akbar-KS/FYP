import React,{useEffect, useState} from 'react'
import { salad } from '../Components/API'
import { chicken } from '../Components/API'
import { cake } from '../Components/API'
import Section from '../Components/Section';
import { useContext } from 'react';
import {Data} from '../Components/ContextAPI/Dataprovider';

function Product() {
  const {setCakeDetails,setChickendDetails,setSaladdetDetails ,saladdetials,chickendetials,cakedetials}  = useContext(Data);

useEffect(() => {

  details();
  return () => {
    
  }
}, [])

// const  input = useRef();

// const inputValue = ()=>{

// }


  async function  details(){
    let response = await cake();
    response = response.hits;
    // console.log(response);
    setCakeDetails(response); 
    response = await chicken();
    response = response.hits;
    setChickendDetails(response);
     response = await salad();
    response = response.hits;
    setSaladdetDetails(response);
    }
    
  return (
   <>

   <center><h1>Cake Details</h1></center>
   <Section data = {cakedetials}/>
   <br/>   
   <center><h1>Chicken Details</h1></center>
   <Section data = {chickendetials}/>
<br/>
   
   <center><h1 >Salad Details</h1></center>
   <Section data = {saladdetials}/> 
   </>
  )

}

export default Product