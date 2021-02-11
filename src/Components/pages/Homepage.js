import React from 'react'
import {Nav} from './HomepageFiles/Nav';
import {Header} from './HomepageFiles/Header'
import { Main } from "./HomepageFiles/Main";
import {Footer} from './Footer'
import {Floating} from './Floating'
const Homepage=()=> {
    return (
      <>
        <Nav />
        <Header />
        <Main />
        <Footer />
        <Floating />
      </>
    );
}

export{ Homepage}
