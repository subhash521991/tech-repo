import React from 'react'

const Hero = () => {
  return (
    <div className='section-hero'>
      <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark"
  style={{
    //height: "100vh",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://euronics.co.in/wp-content/uploads/2022/06/Euronics-Industrial_Banner.jpg"
  }}
>
  <div className="container-fluid">
    <div className="row  justify-content-center align-items-center d-flex text-center h-100">
      <div className="col-12 col-md-8  h-50 ">
        <h1 className="display-2  text-light mb-2 mt-5">
          <strong>Banner Title</strong>{" "}
        </h1>
        <p className="lead  text-light mb-5">
          Sub-heading. Header 100% height with center align items
        </p>
        <p>
          <a
            href="/"
            className="btn bg-danger shadow-lg btn-round text-light btn-lg btn-rised"
          >
            Get More Templates Now &gt;
          </a>
        </p>
        <div className="btn-container-wrapper p-relative d-block  zindex-1">
          <a
            className="btn btn-link btn-lg   mt-md-3 mb-4 scroll align-self-center text-light"
            href="http://bootstraptor.com"
          >
            <i className="fa fa-angle-down fa-4x text-light" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero;
