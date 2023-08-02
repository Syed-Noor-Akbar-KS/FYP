import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const Data = createContext(null);
function Dataprovider({children}) {
         // let add;
  const [additems , setitems] = useState([])
  const [count , setcount] = useState(0)
  const [cakedetials,setCakeDetails] = useState([]);
  const [chickendetials,setChickendDetails] = useState([]);
  const [saladdetials,setSaladdetDetails] = useState([]);
  const [cart, setcart] = useState(1);
  

  return (
    <Data.Provider value={
        {
            additems,
            setitems,
            cakedetials,
            setCakeDetails,
            chickendetials,
            setChickendDetails,
            saladdetials,
            setSaladdetDetails,
            count,
            setcount,
            cart,
            setcart,
        }
    }
    >
        {
            children
        }

        </Data.Provider>
  )
}

export default Dataprovider