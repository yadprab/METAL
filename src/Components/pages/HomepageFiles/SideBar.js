import React from 'react'
import { Link } from "react-router-dom";
import {Button} from './Button'
import {CloseButton} from './CloseButton'
function SideBar({state}) {
    return (
      <>
        <section className="side--nav in">
          <section className="logo--section">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>

            <Link to="/">
              <h1 className="logo-part">Metalripper</h1>
            </Link>
          </section>
          <nav className="mobile--nav">
            <ul className="desktop--nav">
              <li>
                <Link to="/"> Home</Link>
              </li>

              <li>
                <Link to="/about"> About</Link>
              </li>
              <li>
                <Link to="/articles"> Articles</Link>
              </li>
            </ul>
          </nav>
          <Button value="Contact us" clName="secondary-variant-1" />
          <CloseButton state={state}/>
        </section>
      </>
    );
}

export { SideBar}
