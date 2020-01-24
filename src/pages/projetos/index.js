import React from 'react';
import './styles.css'; 
import imagem from '../../../src/img/rod.png'
import node from '../../../src/img/node.png'
import native from '../../../src/img/native.png'

export default function Projetos(){
    return (
        <>
        <h1>Projetos</h1>       
        <h3>Navegue pelos projetos que desejar</h3> <br/>
        
        <div className="projeto-geral">
            
                <div className="projeto-item">
                    <a href="/projetos/react">
                        <img className="react-img" src={imagem} alt=""/>
                        <div className="item-projeto"><h4>React</h4></div>
                    </a>
                </div>            
                <div className="projeto-item">
                    <a href="/projetos/node">
                        <img className="node-img" src={node} alt=""/>
                        <div className="item-projeto"><h4>Node</h4></div>
                    </a>
                </div>            
                <div className="projeto-item">
                    <a href="/projetos/react-native">
                        <img className="node-img" src={native} alt=""/>
                        <div className="item-projeto"><h4>React Native</h4></div>
                    </a>
                </div>            
           </div>  
        </>
    )
}
