import React from 'react';
import './styles.css';
import blog from '../../img/blog.jpg'

export default function Aside(){

    function mudaFoto(){
        
    }
    return (
        <>
            <aside>
                <div className="itemflex">                   
                  <div className="item item1">
                      <a href="">
                      <div className="info">
                          <span>Projetos React</span>
                      </div>
                      </a>
                  </div>
                  <div className="item item1">
                      <a href="">
                      <div className="info">
                          <span>Projetos Node</span>
                      </div>
                      </a>
                  </div>
                  <div className="item item1">
                      <a href="">
                      <div className="info">
                          <span>Projetos React Native</span>
                      </div>
                      </a>
                  </div>
                </div>
            </aside>
        </>
    );
}