import React from 'react'
import {Illustration} from './Illustration'
function Section1() {
const IlluStration ={
  img:'/images/who.svg',
  alt:'team--illustration',
  srcM:'/images/who2.svg',
  scr1:'',
  src2:'',
}
    return (
      <>
        <section className="section--one">
          <article className="section--one--article">
            <h3>Who are we?</h3>
            <p className="body">
              Working with Metalripper means Quality and Transparency you can
              rely on. We're located in Peenya, the largest industrial area in
              Asia.
            </p>
            <p className='body'>
              And collaborate with local Machine Shops to ensure that the
              Manufacturing process begins immediately. We take 100%
              responsibility for all parts we make.
            </p>
          </article>
          <Illustration IllObj={IlluStration} />
        </section>
      </>
    );
}

export  {Section1}