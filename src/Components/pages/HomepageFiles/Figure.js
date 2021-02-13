import React from 'react'
import {Illustration} from './Illustration'
function Figure({Fig, figC}) {


  return (
    <>
      <section className="figure">
       <Illustration IllObj={Fig}/>
       <figcaption>{`FIG:${figC}`}</figcaption>
      </section>
    </>
  );
}

export  {Figure}
