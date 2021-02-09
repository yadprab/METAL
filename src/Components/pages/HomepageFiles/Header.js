import React from 'react'

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
              <button className="primary">
                Talk with us
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071 3.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L14.5858 11L3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L10.2929 4.70711C9.90237 4.31658 9.90237 3.68342 10.2929 3.29289Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </article>
            <section className="hero--img">
              <figure>
                <picture>
                  <img src="/images/head1.png" alt="" />
                </picture>
              </figure>
              <figure>
                <picture>
                  <img src="/images/head2.png" alt="" />
                </picture>
              </figure>
              <figure>
                <picture>
                  <img src="/images/head3.png" alt="" />
                </picture>
              </figure>
            </section>
          </section>
        </header>
      </>
    );
}

export  {Header}
