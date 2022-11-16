import styles from "../styles/Navigation.module.css"
import { Link, Outlet, useLocation } from "react-router-dom"
import iconWebPage from "../images/iconWebPage.png"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

import React, { useState, useEffect } from "react"
import { Button, IconButton } from "@mui/material"
import { useRef } from "react"
import { useSelector } from "react-redux"
import { useLogout } from "../hooks/useLogout"

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const { logout } = useLogout()

  const user = useSelector((state) => state.user)
  console.log(user)

  let location = useLocation()
  let inmutableLocation = useRef(location)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    if (location !== inmutableLocation) {
      setToggleMenu(false)
      inmutableLocation.current = location
    }

    window.addEventListener("resize", changeWidth)

    return () => {
      window.removeEventListener("resize", changeWidth)
    }
  }, [location])

  return (
    <>
      <nav className={styles.navigation}>
        <div>
          <img src={iconWebPage} alt="Icon Web Page" />
        </div>
        {(toggleMenu || screenWidth > 1024) && (
          <div className={styles.navItems}>
            <ul className={styles.list}>
              <Link to="/" className={styles.items}>
                Inicio
              </Link>
              <Link to="/breathing" className={styles.items}>
                Respiración
              </Link>
              <Link to="/meditation" className={styles.items}>
                Meditación
              </Link>
              <Link to="/advice" className={styles.items}>
                Consejos
              </Link>
              <Link to="/recommendations" className={styles.items}>
                Recomendaciones
              </Link>
              {user.token !== undefined ? (
                <>
                  <Link to="/user_id" className={styles.items}>
                    Mi Perfil
                  </Link>
                  <Button
                    onClick={logout}
                    type="submit"
                    variant="text"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className={styles.items}>
                    Iniciar sesión
                  </Link>
                  <Link to="/signup" className={styles.items}>
                    Registrarse
                  </Link>
                </>
              )}
              {user.token !== undefined && user.data.roles.find(element => element.name === "admin") ? (
                <>
                  <Link to="/admin" className={styles.items}>
                    Admin
                  </Link>
                </>
              ) : (
                <></>
              )}
              {user.token !== undefined && user.data.roles.find(element => element.name === "moderator") ? (
                <>
                  <Link to="/moderator" className={styles.items}>
                    Moderador
                  </Link>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        )}
        <div className={styles.buttonContainer}>
          <IconButton onClick={toggleNav} className={styles.btn} size="large">
            {!toggleMenu ? <MenuIcon /> : <CloseIcon />}
          </IconButton>
        </div>
      </nav>
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  )
}

export default Navigation
