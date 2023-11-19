import React from 'react';
import Logo from '../../img/logo.png';
import Menu from '../../img/menu.png';
import '../../App.css'

export default function Header () {
  return (
    <div className='header'>
        <img className='menu' src={Menu} alt='menu'/>
        <a href='./' className='logo'><img src={Logo} /></a>
    </div>
  )
}