"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";
// import pdf from "./amedeidcv.pdf";
export default function Home() {
  
const onButtonClick = () => {
const pdfUrl = "amedeidcv.pdf"; // file location in public folder
const link = document.createElement("a");
link.href = pdfUrl;
link.download = "Ahmed Eid Cv.pdf"; // specify the filename
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
};

  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6">
          <article>
            <span className="h2">
              {" "}
              Hello I am :{" "}
              <h1 className="d-inline-block text-success">
                Ahmed Eid Al-Desouky
              </h1>
            </span>
            <h2>
              <Typewriter
                options={{
                  strings: ['Front-End Developer', 'React.Js Developer','Next.Js Developer'],
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
            </h2>
            <p>
              This is my Simple Test Portfolio and i will improve it <br /> as
              soon as possible and add modifications and improvements to it
            </p>

            <section className="mb-4 social">
              {/* <!-- Gmail --> */}
              <Link
                className=" btn border rounded border-3 rounded-circle m-1"
                // style={{ backgroundColor: " #dd4b39;" }}
                href="mailto:a.email2260@gmail.com"
                role="button"
                target="_blank"
              >
                <i className="fab fa-google text-danger"></i>
              </Link>

              {/* <!-- Linkedin --> */}
              <Link
                className="btn border rounded border-3 rounded-circle  m-1"
                // style={{ backgroundColor: " #0082ca;" }}
                href="https://www.linkedin.com/in/a-email2260/"
                role="button"
                target="_blank"
              >
                <i className="fab fa-linkedin-in text-primary"></i>
              </Link>
              {/* <!-- Github --> */}
              <Link
                className="btn border border-3 rounded rounded-circle m-1"
                // style={{ backgroundColor: " #333333;" }}
                href="https://github.com/ahmedeid2260"
                role="button"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Link>
            </section>

            <button
              className="btn btn-danger px-4"
              onClick={() => onButtonClick()}
            >
              Download Cv
            </button>
            <br/>
            <br/>
          </article>
        </div>
        <div className="col-md-4">
          <figure>
            <Image
              className="w-100 h-25"
              src={require("../assets/image/me1.png")}
              alt="Ahmed Eid"
            />
          </figure>
        </div>
      </div>
    </>
  );
}
