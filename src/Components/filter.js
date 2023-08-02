
let data,finaldata;
let filterInput = document.querySelector(".filter");
 
const fatching = async()=>{
    try{
     data = await fetch('https://fakestoreapi.com/products/');
    //data = await fetch('https://api.escuelajs.co/api/v1/products')
    finaldata = await data.json();
//  console.log(finaldata)
    let showdata = finaldata.map((x)=>{
        return `<div class="card" style="width: 18rem; height:auto;">
        
        <img src=${x.image} alt="" class="card-img-top" style="width: 9rem; height:auto;" >
        <div class="card-body">
          <h5 class="card-title">${x.title}</h5>
          <p class="card-text">${x.description.slice(0,20)}.</p>
          <a href="#" class="btn btn-primary">ADD to cart</a>
        </div>
      </div> `
    })
    document.querySelector('.row').innerHTML = showdata;
}
catch(e){
    console.log(e);
}
}
fatching();

const filterProduct = ()=>{
  const filterData = finaldata.filter((x)=>{
    
    return x.title.includes(filterInput.value);
  });
console.log(filterData);
  let showdata = filterData.map((x)=>{
    
    return `<div class="card" style="width: 18rem; height:auto;">
    
    <img src=${x.image} alt="" class="card-img-top" style="width: 9rem; height:auto;" >
    <div class="card-body">
      <h5 class="card-title">${x.title}</h5>
      <p class="card-text">${x.description.slice(0,20)}.</p>
      <a href="#" class="btn btn-primary">ADD to cart</a>
    </div>
  </div> `
})
document.querySelector('.row').innerHTML = showdata;

}