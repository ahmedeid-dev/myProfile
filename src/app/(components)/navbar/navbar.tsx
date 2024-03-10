import Link from "next/link";
import React from "react";

export default function Navbar() {
return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
        <Link className="navbar-brand" href="/">
            Ahmed Eid
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-4 m-auto mb-2 h3 mb-lg-0">
            <li className="nav-item">
                <Link
                className="nav-link active"
                aria-current="page"
                href="/about"
                >
                About
                </Link>
                        </li>

            <li className="nav-item">
                <Link className="nav-link" href="/projects">
                Projects
                </Link>
            </li>
            </ul>

            <ul className="navbar-nav gap-2 ms-auto mb-2 mb-lg-0 social">
            <li className="nav-item">
                <Link
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: " #dd4b39;" }}
                href="mailto:a.email2260@gmail.com"
                role="button"
                target="_blank"
                >
                <i className="fab fa-google"></i>
                </Link>
            </li>

            <li className="nav-item">
                <Link
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: " #0082ca;" }}
                href="https://www.linkedin.com/in/a-email2260/"
                role="button"
                target="_blank"
                >
                <i className="fab fa-linkedin-in"></i>
                </Link>
            </li>

            <li className="nav-item">
                <Link
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: " #333333;" }}
                href="https://github.com/ahmedeid2260"
                role="button"
                target="_blank"
                >
                <i className="fab fa-github"></i>
                </Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    </>
);
}
