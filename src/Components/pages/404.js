import React from 'react'
import {Nav} from './HomepageFiles/Nav'
import {Svg} from './HomepageFiles/Svg'
function ErrorPage() {
    return (
      <>
      <Nav/>
     
        <section className="error--page">
          <h2>404 Not Found</h2>
         <Svg img='/images/dreamer.svg' alt='dreamer illustration'/>
        </section>
      </>
    );
}

export {ErrorPage};
