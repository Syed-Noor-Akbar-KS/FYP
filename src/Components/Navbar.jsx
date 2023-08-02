import React from 'react'
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Data } from './ContextAPI/Dataprovider';

function Navbar() {
  const {count} = useContext(Data)
  
  return (
  
    <>
    <nav class="navbar navbar-expand-lg ">
  <a class="navbar-brand" href="#"><img src='./vite.svg'/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={"/"}>Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={"/contact"}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={"/services"}>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={"/products"}>Products</Link>
        </li>
    </ul>
    
</div>

  <div className="cart">
  <span className="count">{count}</span>
  <Link aria-current="page" to={"/cart"}><i className="material-icons">shopping_cart</i></Link>
  </div>

</nav>
    </>
  )
}

export default Navbar