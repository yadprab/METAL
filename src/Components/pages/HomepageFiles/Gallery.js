import React from 'react'

function Gallery() {
    return (
      <>
        <section className="gallery">
       

          <article className="methods">
            <article>
              <figure>
                <picture>
                  <img
                    src="/images/Vision Measuring System for Quality.jpg"
                    alt=""
                  />
                  <figcaption>fig 2:VISION MEASURING SYSTEM</figcaption>
                </picture>
              </figure>
              <article>
                <p className="body">
                  3-axis VMS that uses accurate lenses and video capturing to
                  measure the parts.
                </p>
              </article>
            </article>
            <article>
              <figure>
                <picture>
                  <img
                    src="/images/Vision Measuring System for Quality.jpg"
                    alt=""
                  />
                  <figcaption> fig 2.1:Microhite</figcaption>
                </picture>
              </figure>
              <article>
                <p className="body">
                  Motor height gauge for height measurements from 0.0001mm
                </p>
              </article>
            </article>
            <article>
              <figure>
                <picture>
                  <img
                    src="/images/Vision Measuring System for Quality.jpg"
                    alt=""
                  />
                  <figcaption>fig 2.2: Profile projector</figcaption>
                </picture>
              </figure>
              <article>
                <p className="body">
                  PP is an Optical instrument that displays the profile of part
                  for OD, ID, Radius and angle measurements.
                </p>
              </article>
            </article>
          </article>
        </section>
      </>
    );
}

export { Gallery}
