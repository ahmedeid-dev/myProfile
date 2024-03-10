import Link from "next/link";
import React from "react";

export default function Footer() {
return (
    <>
    <footer className="bg-light text-center text-white">
        <div className="container p-4 pb-0">
        <section className="mb-4">
            {/* <!-- Gmail --> */}
            <Link
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: " #dd4b39;" }}
            href="mailto:a.email2260@gmail.com"
            role="button"
            target="_blank"
            >
            <i className="fab fa-google"></i>
            </Link>

            {/* <!-- Linkedin --> */}
            <Link
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: " #0082ca;" }}
            href="https://www.linkedin.com/in/a-email2260/"
            role="button"
            target="_blank"
            >
            <i className="fab fa-linkedin-in"></i>
            </Link>
            {/* <!-- Github --> */}
            <Link
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: " #333333;" }}
            href="https://github.com/ahmedeid2260"
            role="button"
            target="_blank"
            >
            <i className="fab fa-github"></i>
            </Link>
        </section>
        </div>

        <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
        © 2024 Copyright: Ahmed Eid
        </div>
    </footer>
    </>
);
}
