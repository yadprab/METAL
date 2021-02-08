import React from 'react'

function TeamComp({imgObj:{main, scr1, scr2},name, role}) {
    return (
        <>
        <article>
            <figure>
                <picture>
                   <source srcSet=""/>
                   <source srcSet=""/>
                    <img src={main}alt={name}/>
                </picture>
            </figure>
            <article>
                <h3 className='sub'>{name}</h3>
                <p className='body'>{role}</p>
            </article>
        </article>
            
        </>
    )
}

export { TeamComp}
