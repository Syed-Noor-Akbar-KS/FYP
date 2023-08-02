import React from 'react'

function Hero() {
  return (
    <>
    <div>
  <div style={{height: '100vh', backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}} className="position-relative w-100">
    <div className="position-absolute text-white d-flex flex-column align-items-start justify-content-center" style={{top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,.7)'}}>
      <div className="container">
        <div className="col-md-6">
          <span style={{color: '#bbb'}} className="text-uppercase">SubHeadline</span>
          {/* on small screens remove display-4 */}
          <h1 className="mb-4 mt-2 display-4 font-weight-bold">Enter Your <span style={{color: '#9B5DE5'}}>Headline Here</span></h1>
          <p style={{color: '#bbb'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem eos ea, cum quae facilis optio impedit tempora aliquam at eveniet?</p>
          <div className="mt-5">
            {/* hover background-color: white; color: black; */}
            <a href="#" className="btn px-5 py-3 text-white mt-3 mt-sm-0" style={{borderRadius: 30, backgroundColor: '#9B5DE5'}}>Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

    </>
  )
}

export default Hero