import React from 'react'

function Slider() {
  return (
    <>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
    <div className="carousel-inner" >
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg" className="d-block w-100" style={{height:600}} alt="..." />
    </div>
    <div className="carousel-item"  data-bs-interval={2000}>
      <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg" className="d-block w-100" style={{height:600}} alt="..." />
    </div>
    <div className="carousel-item"  >
      <img  src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=360" className="d-block w-100"  style={{height:600}} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider