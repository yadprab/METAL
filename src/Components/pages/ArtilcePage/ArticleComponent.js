import React from 'react'
import {Link} from 'react-router-dom';
function ArticleComponent({ArticleObj}) {
    const {img, srcS, title, bodyT, route, readTime} = ArticleObj;
    return (
        <>
        <section className='article--section'>
        <figure>
            <picture>
            <source media="(min-width:700px )" srcSet={srcS}/>
                <img src={img} alt={title} />
            </picture>
        </figure>

        <article>
            <h3 className='sub'>
              {title}
            </h3>
            <p className='body'>{bodyT}</p>
        </article>

        <article className='bottom--article'>
          <Link to={route}>ReadMore</Link>
          <small>{readTime}</small>
        </article>

        </section>
            
        </>
    )
}

export { ArticleComponent}
