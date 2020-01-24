import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
    return (
        <>
            <footer>
                <p>Feito com <FontAwesomeIcon icon={faHeart} /> por Valcinei Junior</p>
            </footer>
        </>
    );
}