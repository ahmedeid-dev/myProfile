'use client'
import Link from "next/link";
import React, { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        // @ts-ignore
        import ("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
        <Link className="navbar-brand fw-bold fs-2" href="/">
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
            <ul className="navbar-nav gap-4 ms-auto mb-2 h3 text-center mb-lg-0">
            <li className="nav-item">
                <Link
                className="nav-link"
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

        </div>
        </div>
    </nav>
    </>
);
}
