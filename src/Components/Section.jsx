// import React from 'react'
// import { Data } from './ContextAPI/Dataprovider'
// import { useContext } from 'react'
// import { Link } from 'react-router-dom'


// function Section({data}) {
//   const {setitems,setcount} = useContext(Data)

//   return (
//    <>
//    <div className="container">
//       <div className="row" >
//    {
    
//    data.map((x,i)=>{
//     // console.log(i)
//     return(
//      <> 
     
//      <div className="col-lg-3 py-2 col-md-6 col-sm-12" id={i}>
//      <div className="card" style={{width: '18rem'}}>
//   <img className="card-img-top" src={x.recipe.image} alt="Card image cap" />
//   <div className="card-body">
//     <h5 className="card-title">{x.recipe.label}</h5>
//     {/* <p className="card-text">{x.recipe.ingredientLines.slice(0,3)}</p> */}
//     <p className="card-text">Price : {parseInt(x.recipe.totalWeight)}</p>
//     <a className="btn btn-primary" onClick={()=>{
//       setitems(items=>[...items, x]);
//       setcount((val)=>(val+1))
//       }}>Add to Cart</a>
//      <Link to={`/productDetail/${x.recipe.label}`}>    <a className="btn btn-primary">See Details</a></Link>
  
//   </div>
// </div>
// </div>

//      </> 
//     )
//    })
   
   
   
//    }
   
// </div>

// </div> 

//    </>
//   )


// }

// export default Section


import React, { useContext, useState } from 'react';
import { Data } from './ContextAPI/Dataprovider';
import { Link } from 'react-router-dom';

function Section({ data }) {
  const { setitems, setcount } = useContext(Data);

  // Create an array of individual states for each item
  const [itemStates, setItemStates] = useState(Array(data.length).fill(false));

  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((x, i) => {
            return (
              <div key={i} className="col-lg-3 py-2 col-md-6 col-sm-12">
                <div className="card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={x.recipe.image} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{x.recipe.label}</h5>
                    {/* <p className="card-text">{x.recipe.ingredientLines.slice(0, 3)}</p> */}
                    <p className="card-text">Price: {parseInt(x.recipe.totalWeight)}</p>
                    <a
                      className="btn btn-primary"
                      onClick={() => {
                        setitems((items) => [...items, x]);
                        setcount((val) => val + 1);
                        setItemStates((prevStates) => {
                           const newState = [...prevStates];
                           newState[i] = !newState[i];
                           return newState;
                         })
                      }}
                    >
                      Add to Cart
                    </a>
                    <Link to={`/productDetail/${x.recipe.label}`}>
                      <a className="btn btn-primary">See Details</a>
                    </Link>
                    {/* Example of using individual state for each item */}
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Section;
