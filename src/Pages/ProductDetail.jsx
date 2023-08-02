import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../Components/ContextAPI/Dataprovider';

const ProductDetail = () => {

    const {cakedetials,chickendetials,saladdetials} = useContext(Data);
    const {id} = useParams();
let product;
    
       product = cakedetials.find((product) => {
        return product.recipe.label === id;
    });
    
    if (!product){
      product = chickendetials.find((product) => {
        return product.recipe.label === id;
    });

    }
    if(!product)
    {
      product = saladdetials.find((product) => {
        return product.recipe.label === id;
    });
    
    }
    
    
    
  return (

        <> 
        
        <div className="col-lg-3 py-2 col-md-6 col-sm-12">
        <div className="card" style={{width: '18rem'}}>
     <img className="card-img-top" src={product.recipe.image} alt="Card image cap" />
     <div className="card-body">
       <h5 className="card-title">{product.recipe.label}</h5>
       <p className="card-text">{product.recipe.ingredientLines.slice(0,3)}</p>
       <p className="card-text">Price : {parseInt(product.recipe.totalWeight)}</p>
       {/* <a className="btn btn-primary" onClick={()=>{
         setitems(items=>[...items, x]);
         setcount((val)=>(val+1))
         }}>Add to Cart</a> */}
     </div>
   </div>
   </div>
   
        </>
  )
}

export default ProductDetail