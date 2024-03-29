import React from 'react'
import  Link  from 'next/link';
import Image from 'next/image';

export default function page() {
  return <>
    <div className='text-center text-capitalize'>
      <h2>Fresh Cart</h2>
      <p className=''>The Most Important &quot;Framework&quot; Project And 
                              A New &quot;React&quot; Web Site</p>
      <p>using <span className="fw-bold">
      Html5 && Css3 && bootstrap && Fontawesome && 
JavaScript && Es6 && Regex && jQuery && jwt-decode && Context Api .
And Also has a lot of features that i used in React like <br/> (react-router-dom , formik , react-slick , axios , react-detect-offline , react-helmet , 
react-hot-toast , react-loader-spinner , react-query , slick-carousel , Yup ) 

        </span></p>
        <p>and others React Libraries For handling shopping cart and payments.</p>
    </div>
    <div className="row g-4 align-items-center py-5">
      <div className="col-md-3">
        <div className="links ms-5 d-flex flex-column gap-5">

                      {/* <!-- WebSite --> */}
                      <Link
            className=" rounded rounded-circle  m-1"
            href="https://fresh-cart-olive.vercel.app/"
            role="button"
            target="_blank"
            >
            <i className="fas fa-globe fa-3x text-danger"></i>
          </Link>
          
            {/* <!-- Github --> */}
            <Link
            className=" rounded rounded-circle m-1"
            href="https://github.com/ahmedeid2260/Fresh-Cart"
            role="button"
            target="_blank"
            >
            <i className="fab fa-github fa-3x"></i>
            </Link>
        </div>
      </div>
      <div className="col-md-9">
        <figure className=" rounded rounded-2 overflow-hidden img">
          <Link href="https://fresh-cart-olive.vercel.app/" target="_blank">
          <Image src={require("../../../../assets/image/13freshcart.svg")} alt="react-App1" className="w-100 h-50" />
          </Link>
        </figure>
      </div>
    </div>
  </>
}
