import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
    return (
      <>
        <footer>
          <section className='top--one'>
            <section className="logo--section">
              <Link to="/">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <Link to="/">
                <h1 className="logo-part">Metalripper</h1>
              </Link>
            </section>

            <h2 className="body">Your Indian Machining Partner</h2>
          </section>
          <article>
            <h3 className="sub">New Business</h3>
            <a
              href="mailto:contact@metalripper.com"
              id="mailto:contact@metalripper.com"
              className="body"
            >
              contact@metalripper.com
            </a>

            <a
              href="tel:+91 9442116330"
              id="tel:+91 9442116330"
              className="body"
            >
              +91 9442116330
            </a>
          </article>
          <article>
            <h3 className="sub">Visit</h3>
            <p>
              314, 14th Ward <br />
              Near Canara Bank, Pillanallur, <br />
              TN 637 403-India.
            </p>
          </article>
          <article>
            <h3 className="sub">Social Media</h3>
            <a
              href="https://www.linkedin.com/in/machine-boy"
              className="body"
              target="_blank"
              rel="noOpener noReferrer"
              aria-label="linkedin link"
              id="https://www.linkedin.com/in/machine-boy"
            >
              Linked in
            </a>
            <a
              className="body"
              href="https://www.linkedin.com/in/machine-boy"
              target="_blank"
              rel="noOpener noReferrer"
              aria-label="linkedin link"
              id="https://www.linkedin.com/in/machine-boy"
            >
              facebook
            </a>
            <a
              className="body"
              href="https://www.linkedin.com/in/machine-boy"
              target="_blank"
              rel="noOpener noReferrer"
              aria-label="linkedin link"
              id="https://www.linkedin.com/in/machine-boy"
            >
              instagram
            </a>
            <a
              className="body"
              href="https://www.linkedin.com/in/machine-boy"
              target="_blank"
              rel="noOpener noReferrer"
              aria-label="linkedin link"
              id="https://www.linkedin.com/in/machine-boy"
            >
              Youtube
            </a>
          </article>

          <article>
            <p>© 2021 Metalripper</p>
          </article>
        </footer>
      </>
    );
}

export {Footer}
