import React from 'react'

function Card() {
    return (
      <>
        <article className="cards">
          <article>
            <h3 className="sub">CNC mills</h3>
            <p>3, 4, 5 axis Mills for simple and complex geometries.</p>
            <figure>
              <picture>
                <img src="/images/card.jpg" alt="" />
              </picture>
              <figcaption>fig1 Cnc mills </figcaption>
            </figure>
          </article>
          <article>
            <h3 className="sub">CNC Lathes</h3>
            <p>
              Turning centres and Mill-Turns for quick production turnaround.
            </p>
            <figure>
              <picture>
                <img src="/images/card.jpg" alt="" />
              </picture>
              <figcaption>fig1.3 Cnc Lathes </figcaption>
            </figure>
          </article>
          <article>
            <h3 className="sub">CNC grinders</h3>
            <p>
              Parallel and Cylindrical grinders to achieve tight tolerances
              (microns) and smooth surface finishes
            </p>
            <figure>
              <picture>
                <img src="/images/card.jpg" alt="" />
              </picture>
              <figcaption>fig1.3 Cnc grinders </figcaption>
            </figure>
          </article>
        </article>
      </>
    );
}

export { Card}
