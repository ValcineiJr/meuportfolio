import React from 'react';
import './styles.css';
import { SocialIcon } from 'react-social-icons';

export default function Contato(){

    return(
        <>
       <h1 style={{textAlign : 'center'}}>Contato - Em breve</h1>       
       <div className="form">
       <form action="">
           <label htmlFor="nome">Nome :</label>
           <input type="text" name="nome" id="nome"/>

           <label htmlFor="email">Email: </label>
           <input id="email" type="email" name="email" />

           <label  htmlFor="texto">Digite sua mensagem: </label>
           <textarea name="texto" id="texto"></textarea>
           <input type="submit" value="Enviar"/>
       </form>
       </div>
        <div className="social">
            <div><SocialIcon url="https://www.facebook.com/valcinei.furtado" fgColor="#fff" network="facebook" /><br/> Facebook</div>
            <div><SocialIcon url="https://github.com/ValcineiJr" network="github" fgColor="#fff" bgColor="#000"/><br/> Github</div>
        </div>
        </>
    )
}