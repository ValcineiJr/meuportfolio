import React from 'react';
import './styles.css';
import List from './components/List';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import Routes from './routes';

export default function App() {    

    return (
        <>
        <Header></Header>
        <div className="container">
                  
         <Routes/>                           
             
        </div>
        <Footer></Footer> 
        </>
    )
  }

//componentes, roteamento com o react-router, clicos de vida com componentDidMount, estado, api, propriedades, redux