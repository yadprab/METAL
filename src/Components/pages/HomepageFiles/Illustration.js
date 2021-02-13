import React from 'react'

function Illustration({IllObj}) {
    const { img, alt, srcM, src1, src2 } = IllObj;

    return (
        <>
        <figure>
            <picture>
            <source srcSet={src2}/>
            <source srcSet={src1}/>
            <source media="(min-width:700px )" srcSet={srcM}/>
            <img src={img} alt={alt}/>
            </picture>
        </figure>
            
        </>
    )
}

export{ Illustration}
