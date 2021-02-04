import React from 'react'
import {Nav} from './HomepageFiles/Nav';
import {Header} from './HomepageFiles/Header'
import { Main } from "./HomepageFiles/Main";
const Homepage=()=> {
    return (
      <>
        <Nav />
        <Header />
        <Main />
      </>
    );
}

export{ Homepage}
