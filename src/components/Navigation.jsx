import style from "../styles/Navigation.module.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import iconWebPage from "../images/iconWebPage.png";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { useRef } from "react";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let location = useLocation();
  let inmutableLocation = useRef(location)
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    if (location !== inmutableLocation){
      setToggleMenu(false);
      inmutableLocation.current = location
    }

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [location]);

  return (
    <div>
      <nav className={style.navigation}>
        <div>
          <img src={iconWebPage} alt="Icon Web Page" />
        </div>
        {(toggleMenu || screenWidth > 1024) && (
          <div className={style.navItems}>
            <ul className={style.list}>
              <Link to="/" className={style.items}>Inicio</Link>
              <Link to="/breathing" className={style.items}>Respiración</Link>
              <Link to="/meditation" className={style.items}>Meditación</Link>
              <Link to="/recommendations" className={style.items}>Recomendaciones</Link>
              <Link to="/advice" className={style.items}>Consejos</Link>
              <Link to="/user_id" className={style.items}>Mi Perfil</Link>
            </ul>
          </div>
        )}
        <div className={style.buttonContainer}>
          <IconButton onClick={toggleNav} className={style.btn} size="large" >
            {!toggleMenu ? <MenuIcon/> : <CloseIcon />}
          </IconButton>
        </div>
      </nav>
      <main className={style.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default Navigation;
