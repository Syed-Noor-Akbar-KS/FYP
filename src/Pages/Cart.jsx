import React from 'react'
import { useContext } from 'react'
import  { Data } from '../Components/ContextAPI/Dataprovider'
import { useRef } from 'react'

function Cart() {
  const {cart,setcart} = useContext(Data)

  const  input = useRef();


const {additems} = useContext(Data)
console.log(additems)
  return (
    <>
    <div className="container">
  <div className="divTable div-hover">
    <div className="rowTable bg-primary text-white pb-2">
      <div className="divTableCol">Product</div>

      <div className="divTableCol">Quantity</div>
      <div className="divTableCol">Price</div>
      <div className="divTableCol">Total</div>
      <div className="divTableCol">Actions</div>
    </div>

 {
  additems.map((x,index)=>{
      return(
        <>
        <div className="rowTable" key={index} >
      <div className="divTableCol">
        <div className="media">
          <a className=" pull-left mr-2 ml-0" href="#"> <img className="img-fluid" src={x.recipe.image} style={{width: 92, height: 72, marginLeft: 0}} /></a>
         <span className="media-heading">{x.recipe.label}</span>
        </div>
      </div>
      <div className="divTableCol">
    
        <input type="text" className="form-control" ref={input} id={`exampleInputEmail1${index}`} onChange={()=>{setcart(input.current.value)}} />
      </div>
      <div className="divTableCol"><strong>Price : {parseInt(x.recipe.totalWeight)}</strong></div>
      <div className="divTableCol"><strong>Total Price : {parseInt(x.recipe.totalWeight)*cart}</strong></div>
      <div className="divTableCol">
        <button type="button" className="btn btn-danger"><span className="fa fa-remove" /> Remove</button>
      </div>
    </div>
        
        </>
      )
    })
 
    
}

  </div>
</div>

    </>
  )
}

export default Cart


// <div className="container">
//       <div className="row" >
// {
//   additems.map((x,i)=>{
//     // console.log(i)
//     return(
//      <> 
//      <div className="col-lg-3 py-2 col-md-6 col-sm-12" id={i}>
//      <div className="card" style={{width: '18rem'}}>
//   <img className="card-img-top" src={x.recipe.image} alt="Card image cap" />
//   <div className="card-body">
//     <h5 className="card-title">{x.recipe.label}</h5>
//     <p className="card-text">{x.recipe.ingredientLines.slice(0,3)}</p>
//   </div>
// </div>
// </div>
//      </> 
//     )
//    })
// }
//         </div>
//         </div>