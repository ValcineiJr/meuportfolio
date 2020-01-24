import React from 'react';
import './styles.css';
import eu from '../../img/eu.jpg'

export default function Sobre() {
    return (
        <>
        <div class="container-sobre">       
            <div className="foto"><img src={eu} alt=""/><p>Estou nessa área de tecnologia desde meus 15 anos e venho sempre aprimorando meus conhecimentos, em 2020 estou mais engajado que nunca e tentando conseguir meu lugar no mercado de trabalho sempre buscando aprender as melhores e mais avançadas tecnologias </p></div>
            <div className="bio">
                <div className="bio-info">                   
                    <h1>Currículo</h1>
                    <h2>Valcinei Furtado Cardozo Junior</h2>
                    <h3>Brasileiro, 20 anos, solteiro</h3>
                    <p>
                    <b>valcineifurtadotrab@gmail.com <br/>
                    (21)3082-5545 | (21)99096-2481 <br/>
                    Realengo, Rio de Janeiro, RJ, Brasil,  21765430</b> <br/> <br/>
                    <h4>Objetivo</h4> 
                    Sou apaixonado em programação e adoro desenvolver sistemas, sempre viso em mobile-first e tento deixar minhas aplicações o mais responsivas possíveis, quero usar esses conhecimentos para fazer a diferença nessa área.
                    <br/> <br/>
                    <h4>Resumo</h4>
                    Nos últimos meses eu tenho estudado do básico até o avançado em desenvolvimento Web, e agora utilizando a linguagem JavaScript me sinto confiante para estar ingressando nesse mercado.
                    <br/><br/>
                    <h4>Formação</h4> 
                    <ul>
                        <li>Graduação</li>
                        <li>Análise e desenvolvimento de Sistemas, FIS - FACULDADES INTEGRADAS SIMONSEN</li>
                        <li>(Dezembro de 2021) - Cursando</li>
                        <hr/>
                        <li>Ensino Médio </li>
                        <li>Profissionalizante (Técnico de Informática), Colégio Realengo</li>
                        <li>(Dezembro de 2016) - Concluído</li>
                        </ul>
                        <h4>Conhecimentos</h4> 
                        Inglês intermediário, Git, GitHub, Pacote Office, Estrutura MVC, Laravel, Bootstrap <br/><br/>
                        <h4>Tecnologias</h4> 
                        MySQL, MongoDB, PHP, HTML5, CSS3, JAVA, e JavaScrip, NodeJs, ReactJs e React
                        Native. Excelente noção de linguagem e lógica de programação. <br/><br/>
                        <h4>Cursos Complementas</h4> 
                        <ul>
                            <li>Semana OmniStack 10 - Aprendi a como construir interfaces usando React, criar uma Api com NodeJs se comunicando com o MongoDB e a desenvolver aplicativos em React Native. 
                        mobile usando React Native.</li>
                        <li>Formação NodeJs (Udemy) - Aprendi a como utilizar o NodeJs mais a fundo, usando o express.</li>
                        </ul>
                        <h4>Reconhecimentos</h4> 
                        Em meu TCC no ensino médio criei uma loja virtual utilizando PHP, MySQL, CSS, JavaScript. <br/> <br/>

                        Durante a semana OmniStack eu desenvolvi uma aplicação que cadastra usuarios no banco de dados e que utiliza geolocalização para capturar a posição do usuário, tudo isso pegando informações da Api do github, utilizando Node, React e React Native
                        e HTML. <br/><br/>
                        
                        Criei um blog utilizando Node e express
                        <br/><br/>
                        <h4>Informações complementares</h4> 
                        Facilidade e vontade de aprender, dinâmico, ambicioso, organizado, facilidade de falar em público</p>
                    </div>              
            </div>
        </div>       
        
        </>
    )
}