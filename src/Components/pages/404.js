import React from 'react'
import {Nav} from './HomepageFiles/Nav'
import {Svg} from './HomepageFiles/Svg'
import {Link} from 'react-router-dom';
function ErrorPage() {
    return (
      <>
        <Nav />
        <header className="error--page">
          <section>
            <Svg img="/images/dreamer.svg" alt="dreamer illustration" />

            <article>
              <h1>404</h1>
              <p className="sub">
                Oops you're lost in Dreams. the page you looking for is not
                found.
              </p>
              <Link to="/" className='primary-variant-2'>Back to home</Link>
            </article>
          </section>
        </header>
      </>
    );
}

export {ErrorPage};
