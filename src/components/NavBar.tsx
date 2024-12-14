import {ReactNode, useState, useEffect } from 'react';
import { FaPoo, } from 'react-icons/fa';
import { IoDocumentTextOutline } from "react-icons/io5";




const NavBar = () => {
  return (
    <div className='fixed top-0 w-screen h-16 m-0 flex flex-row bg-emerald-700 text-black shadow'>
      <i>A</i>
        <i>B</i>
        <i>C</i>
        <i>D</i>
      <NavBarIcon icon={<FaPoo size="28" />} text="Trash" />
      <NavBarIcon icon={<IoDocumentTextOutline size='28'/>} text = "Resumé"/>
    </div>
  );
};

const NavBarIcon = ({ icon, text }) => (
    <div className="navbar-icon group relative">
      {icon}
      <span className="navbar-tooltip">
      {text}
    </span>
    </div>
);


export default NavBar;