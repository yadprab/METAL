import React from 'react'
import {Nav} from './HomepageFiles/Nav';
import {Footer} from './Footer';
import {Illustration} from './HomepageFiles/Illustration';
import {ArticleData} from './ArtilcePage/ArticleData';
import {ArticleComponent} from './ArtilcePage/ArticleComponent';
function Articles() {
    const IlluStration = {
      img: "/images/Article.svg",
      alt: "team--illustration",
      srcM: "",
      scr1: "",
      src2: "",
    };
    return (
      <>
        <Nav />
        <header className="article--header">
          <Illustration IllObj={IlluStration} />
        </header>
        <main className="article--main">
          {ArticleData.map((data) => {
            return <ArticleComponent key={data.id} ArticleObj={data} />;
          })}
        </main>

        <Footer />
      </>
    );
}

export {Articles}
 