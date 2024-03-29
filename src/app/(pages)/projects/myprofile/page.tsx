import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="text-center text-capitalize">
        <h2>my profile</h2>
        <p className="">
          The latest &quot;Framework&quot; Project And A New &quot;Next&quot;
          Web Site
        </p>
        <p>
          using{" "}
          <span className="fw-bold">
            Html5 && Css3 && bootstrap && Fontawesome && JavaScript <br />
            And TypeScript , SCSS And Next.js <br/>
            And Also has a lot of features that i used in React like <br />{" "}
            (App-router , react-detect-offline , react-helmet , framer-motion , typewriter-effect
            react-loader-spinner )
          </span>
        </p>
        <p>and others React Libraries For handling Design.</p>
      </div>
      <div className="row g-4 align-items-center py-5">
        <div className="col-md-3">
          <div className="links ms-5 d-flex flex-column gap-5">
            {/* <!-- WebSite --> */}
            <Link
              className=" rounded rounded-circle  m-1"
              href="https://my-profile-three-self.vercel.app/"
              role="button"
              target="_blank"
            >
              <i className="fas fa-globe fa-3x text-danger"></i>
            </Link>

            {/* <!-- Github --> */}
            <Link
              className=" rounded rounded-circle m-1"
              href="https://github.com/ahmedeid2260/myProfile"
              role="button"
              target="_blank"
            >
              <i className="fab fa-github fa-3x"></i>
            </Link>
          </div>
        </div>
        <div className="col-md-9">
          <figure className=" rounded rounded-2 overflow-hidden img">
            <Link
              href="https://my-profile-three-self.vercel.app/"
              target="_blank"
            >
              <Image
                src={require("../../../../assets/image/dev.jpg")}
                alt="react-App1"
                className="w-100 h-25"
              />
            </Link>
          </figure>
        </div>
      </div>
    </>
  );
}
