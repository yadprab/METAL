import React from 'react'

import {Svg} from './Svg'
const Header=()=> {
    return (
      <>
        <header>
          <section className="hero--section">
            <article className="hero--text">
              <h1>Your INDIAN Machining partner</h1>
              <h2 className="sub">
                Quality parts machined from India at competitive prices
              </h2>

              <a href="mailto:" className="primary" id="section--contact">
                TALK WITH US
                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                <svg
                  version="1.1"
                  id="mail--to"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 400 400"
                  style={{ enableBackground: "new 0 0 400 400" }}
                  xmlSpace="preserve"
                >
                  <g id="XMLID_1_">
                    <polygon
                      id="XMLID_869_"
                      points="0,127.5 0,274.219 104.8,206.1 	"
                    />
                    <polygon
                      id="XMLID_870_"
                      points="400,274.219 400,127.5 295.2,206.1 	"
                    />
                    <polygon
                      id="XMLID_871_"
                      points="200,277.5 130.357,225.268 0,310 0,340 400,340 400,310 269.643,225.268 	"
                    />
                    <polygon
                      id="XMLID_872_"
                      points="0,90 200,240 400,90 400,60 0,60 	"
                    />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </a>
            </article>
            <section className="hero--img">
              <Svg img="/images/g13.svg" alt="business illustration" />
            </section>
          </section>
        </header>
      </>
    );
}

export  {Header}
