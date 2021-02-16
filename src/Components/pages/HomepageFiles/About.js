import React from 'react'
import { Link } from "react-router-dom";
import {Illustration} from './Illustration'
function About() {
    const IlluStration = {
      img: "/images/Aboutus.svg",
      alt: "team--illustration",
      srcM: "/images/team2.svg",
      scr1: "",
      src2: "",
    };
    return (
      <>
        <section className="about--section">
          <section className="about--content">
            <h3>About us</h3>
            <p className="sub">Passionate and Driven Machinists</p>
            <article>
              <p className="body">
                Metalripper is a team of talented and young Machinists and
                Engineers coming together to make India sourcing seamless to the
                Global customers.
              </p>
              <Link to="/about" className="link">
                Why Metalripper?
              </Link>
            </article>
          </section>

          <section className='Illustration'>
            <Illustration IllObj={IlluStration} />
          </section>
        </section>
      </>
    );
}

export {About}