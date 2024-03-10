import React from 'react'
import  Link  from 'next/link';
import Image from 'next/image';

export default function page() {
  return <>
    <div className='text-center text-capitalize'>
      <h2>Party</h2>
      <p className=''>  New jQuery Web Site  </p>
      using : <span className="fw-bold"> Html5 && Css3 && bootstrap && 
                                JavaScript && Regex && jQuery. </span>
    </div>
    <div className="row g-4 align-items-center py-5">
      <div className="col-md-3">
        <div className="links ms-5 d-flex flex-column gap-5">

                      {/* <!-- WebSite --> */}
                      <Link
            className=" rounded rounded-circle  m-1"
            href="https://ahmedeid2260.github.io/party/"
            role="button"
            target="_blank"
            >
            <i className="fas fa-globe fa-3x text-danger"></i>
          </Link>
          
            {/* <!-- Github --> */}
            <Link
            className=" rounded rounded-circle m-1"
            href="https://github.com/ahmedeid2260/party"
            role="button"
            target="_blank"
            >
            <i className="fab fa-github fa-3x"></i>
            </Link>
        </div>
      </div>
      <div className="col-md-9">
        <figure className=" rounded rounded-2 overflow-hidden img">
          <Link href="https://ahmedeid2260.github.io/party/" target="_blank">
          <Image src={require("../../../../assets/image/10party.jpg")} alt="party" className="w-100 h-25" />
          </Link>
        </figure>
      </div>
    </div>
  </>
}
