import React from "react";
import s from './Header.module.css'
import Logo from '../../img/Logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={Logo} alt="Logo"/>
        </header>
    )
};

export default Header;