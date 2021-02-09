import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBar } from "./SideBar.js";
function Nav() {
  const [navState, setNavState] = useState(false);

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
          <button
            id="navigation--button"
            aria-label="navigation"
            onClick={() => {
              setNavState(!navState);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id={navState ? "bar-1" : "bar-1-1"}
                d="M3.01743 12.8467H21.0174"
                stroke="#F5F5F5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id={navState ? "bar-2" : "bar-2-1"}
                d="M3.01743 6.84668H21.0174"
                stroke="#F5F5F5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id={navState ? "bar-1" : "bar-1-1"}
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
        </ul>
      </nav>
      {navState && <SideBar state={setNavState} />}
    </>
  );
}

export { Nav };
