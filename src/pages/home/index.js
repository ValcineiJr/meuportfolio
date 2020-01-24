import React, { Component } from 'react';
import Main from '../../components/Main';
import Aside from '../../components/Aside';
import './styles.css';

export default function Home(){

    return(
        <>
       <div className="container-home">
            <Main></Main>
                <Aside></Aside>
        </div>        
   
        </>
    )
}