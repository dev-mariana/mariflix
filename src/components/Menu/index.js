import React from 'react';
import logo from '../../assets/images/logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="Mariflix-logo"/>  
            </Link>
            <Button as={Link} className="ButtonLink" to="cadastro/video">Novo vídeo</Button>
        </nav>
    );
}

export default Menu;