import React from 'react'
import { Link } from "react-router-dom";
function Nav() {
    return (
      <>
        <nav>
          <section className="logo--section">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>

            <Link to="/">
              <h1 className="logo-part">Metalripper</h1>
            </Link>
          </section>
          <section className="button--section">
            <button id="navigation--button" aria-label="navigation">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.01743 12.8467H21.0174"
                  stroke="#F5F5F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.01743 6.84668H21.0174"
                  stroke="#F5F5F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.01743 18.8467H21.0174"
                  stroke="#F5F5F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </section>
          <ul className="desktop--nav">
            <li>
              <Link to="/"> home</Link>
            </li>

            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/articles"> Articles</Link>
            </li>
            <li>
              <Link to="/contact"> contact</Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export {Nav}