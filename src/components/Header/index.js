import React, {useState, useEffect} from 'react';
import  './styles.css';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBoxOpen, faAddressCard, faBrain, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { NavbarBrand, Navbar, NavbarProps, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){     
        
    
    return (
        <>
            <header>
            <Navbar className="menu" bg="dark"  expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                <Nav.Link href="/projetos"><FontAwesomeIcon icon={faBoxOpen} /> Projeto</Nav.Link>
                <Nav.Link href="/sobre"><FontAwesomeIcon icon={faUserGraduate} /> Sobre</Nav.Link>
                <Nav.Link href="/contato"><FontAwesomeIcon icon={faAddressCard} /> Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </header>
        </>
    );
}