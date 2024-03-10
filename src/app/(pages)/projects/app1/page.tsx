import React from 'react'
import  Link  from 'next/link';
import Image from 'next/image';

export default function page() {
  return <>
    <div className='text-center text-capitalize'>
      <h2>React App 1</h2>
      <p className=''>The First &quot; Framework &quot; Project And A New &quot;React&quot; Web Site  </p>
      using : <span className="fw-bold">  Html5 && Css3 && bootstrap && 
        JavaScript && Regex && jQuery && &quot;React&quot; Library &&
        &quot;react-router-dom&quot; </span>
    </div>
    <div className="row g-4 align-items-center py-5">
      <div className="col-md-3">
        <div className="links ms-5 d-flex flex-column gap-5">

                      {/* <!-- WebSite --> */}
                      <Link
            className=" rounded rounded-circle  m-1"
            href="https://react-app1-nine.vercel.app/"
            role="button"
            target="_blank"
            >
            <i className="fas fa-globe fa-3x text-danger"></i>
          </Link>
          
            {/* <!-- Github --> */}
            <Link
            className=" rounded rounded-circle m-1"
            href="https://github.com/ahmedeid2260/React-App1"
            role="button"
            target="_blank"
            >
            <i className="fab fa-github fa-3x"></i>
            </Link>
        </div>
      </div>
      <div className="col-md-9">
        <figure className=" rounded rounded-2 overflow-hidden img">
          <Link href="https://react-app1-nine.vercel.app/" target="_blank">
          <Image src={require("../../../../assets/image/12app1.png")} alt="react-App1" className="w-100" />
          </Link>
        </figure>
      </div>
    </div>
  </>
}
