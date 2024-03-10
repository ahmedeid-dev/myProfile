import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
    return <>
        <div className="objectives  my-2">
            <h2>Objectives : </h2>
            <p className="fw-bold text-center " style={{lineHeight:"2.6"}}>
            Motivated and detail-oriented Junior Front-End Developer seeking to leverage a solid foundation in
front-end technologies to deliver high-quality user experiences. Adept at translating designs into
responsive and dynamic web applications. Eager to contribute to a productive team to develop
innovative web solutions and grow as a professional in the tech industry.
            </p>
    </div>
        
        <h2 className="mb-5">Technical Skills : </h2>
        {/* laaaaaaaaaaaaaaaaaaanguages */}
                <div className="languages">
                    
            <h3 className="text-center">Languages</h3>
            {/* HTML */}
    <div className="name my-4 d-flex align-items-center">
        <Link target="_blank" href="https://html.com/" >
        <i className="fa-brands fa-html5 fa-3x mx-2 text-danger"></i>
        <label className="h3">HTML</label>
        </Link>
    </div>
            <div
        className=" progress bg-body "
        // role="progressbar"
        // aria-label="Basic example"
        // aria-valuenow="0"
        // aria-valuemin="0"
        // aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "95%" }}></div>
    </div>
{/* Css */}
            <div className="name my-4 d-flex align-items-center">
                <Link href='https://elzero.org/study/css-2021-study-plan/' target="_blank">
        <i className="fa-brands fa-css3-alt fa-3x mx-2 text-primary"></i>
        <label  className="h3">Css</label>
        </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "90%" }}></div>
        </div>
        {/* java script */}
        <div className="name my-4 d-flex align-items-center">
        <Link href='https://www.javascript.com/' target="_blank">
            
        <i className="fa-brands fa-js fa-3x mx-2 text-warning"></i>
                    <label className="h3">Java Script</label>
                    </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "85%" }}></div>
    </div>
        {/* Type script */}
            <div className="name my-4 d-flex align-items-center">
        <Link href='https://www.typescriptlang.org/' target="_blank">
                
        <Image className="mx-2" width={50} height={50} src={require('../../../assets/image/typescript.png')} alt="jquery" />
            
                    <label className="h3">Type Script</label>
                    </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "80%" }}></div>
    </div>
        {/* Saaaaaaaaaaaaaaaass */}
            <div className="name my-4 d-flex align-items-center">
        <Link href='https://sass-lang.com/' target="_blank">
                
        <i className="fa-brands fa-sass fa-3x mx-2 text-danger"></i>
                    <label className="h3">SCSS</label>
                    </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "75%" }}></div>
    </div>
        </div>
        {/* fraaaaaaaaaaaaaaamework */}
                <div className="framework">
    <h3 className="text-center my-5">Framework & Library</h3>
        {/* boooooooooooooootstraaaaaaaaaaaaap */}
            <div className="name my-4 d-flex align-items-center">
                <Link target="_blank" href="https://getbootstrap.com/">
        <i style={{color:"#7811F7"}} className="fa-brands fa-bootstrap fa-3x mx-2 "></i>
        <label className="h3">Bootstrap</label>
        </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "90%" }}></div>
        </div>
        {/* jqueeeeeeeeeeeeery */}
            <div className="name my-4 d-flex align-items-center">
            <Link target="_blank" href="https://jquery.com/">
            <Image className="mx-2" width={50} height={50} src={require('../../../assets/image/jquery.png')} alt="jquery" />
                    <label className="h3">jQuery</label>
                    </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "85%" }}></div>
    </div>
                    {/* reaaaaaaaaaaact */}
                    <div className="name my-4 d-flex align-items-center">
            <Link target="_blank" href="https://react.dev/">
        <i className="fa-brands fa-react fa-3x mx-2 text-primary"></i>
        <label className="h3">React.Js</label>
        </Link>
    </div>
    <div
        className=" progress bg-body "
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "80%" }}></div>
    </div>
            {/* Neeeeeeeeeeeeeext */}
                    <div className="name my-4 d-flex align-items-center">
            <Link target="_blank" href="https://nextjs.org/">
            <Image className="mx-2" width={50} height={50} src={require('../../../assets/image/next-js-seeklogo.svg')} alt="jquery" />
        <label className="h3">Next.Js</label>
        </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "75%" }}></div>
        </div>
                </div>
            {/* tooooooooooooools */}
                <div className="tools">
    <h3 className="text-center my-5">tools & Technologies</h3>
                    {/* giiiiiiiiiiiiiiit */}
                    <div className="name my-4 d-flex align-items-center">
            <Link target="_blank" href="https://git-scm.com/">
                <i className="fa-brands fa-git-alt fa-3x mx-2 text-danger"></i>
                <label className="h3">Git</label>
                </Link>
    </div>
    <div
        className=" progress bg-body "
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "70%" }}></div>
    </div>
{/* Giiiiiiiiiiiiiiiiiiiithub */}
            <div className="name my-4 d-flex align-items-center">
            <Link target="_blank" href="https://github.com/">
            <i className="fa-brands fa-github fa-3x mx-2"></i>
        <label className="h3">Github</label>
        </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "75%" }}></div>
        </div>
        {/* Webpack */}
            <div className="name my-4 d-flex align-items-center">
            <Link target="_blank" href="https://webpack.js.org/">
            <Image className="mx-2" width={50} height={50} src={require('../../../assets/image/webpack.png')} alt="jquery" />
        <label className="h3">Webpack</label>
        </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "65%" }}></div>
        </div>
        {/* NPpppppppppppppppppm */}
            <div className="name my-4 d-flex align-items-center">
            <Link target="_blank" href="https://www.npmjs.com/">
        <i className="fa-brands fa-npm fa-3x mx-2 text-primary"></i>
        <label className="h3">NPM</label>
        </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "70%" }}></div>
    </div>
            <div className="name my-4 d-flex align-items-center">
            <Link target="_blank" href="https://www.postman.com/">
            <Image className="mx-2" width={50} height={50} src={require('../../../assets/image/postman.png')} alt="jquery" />
        <label className="h3">Postman</label>
        </Link>
    </div>
    <div
        className=" progress bg-body"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div className="progress-bar rounded-2 " style={{ width: "60%" }}></div>
    </div>
                </div>
    </>
}
