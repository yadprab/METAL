import React from 'react'
import { Link } from "react-router-dom";

function About() {
    return (
      <>
        <section className="about--section">
          <h3>About us</h3>
          <p className="sub">Passionate and Driven Machinists</p>
          <article>
            <p className="body">
              Metalripper is a team of talented and young Machinists and
              Engineers coming together to make India sourcing seamless to the
              Global customers.
            </p>
          </article>
          <Link to="/contact" className="link">Why Metalripper?</Link>
        </section>
      </>
    );
}

export {About}