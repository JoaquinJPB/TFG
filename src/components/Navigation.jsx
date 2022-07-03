
import style from '../styles/Navigation.module.css'
import { Link, Outlet } from 'react-router-dom'
import iconWebPage from "../images/iconWebPage.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navigation = () => {
    return (
        <main>
            <nav className={style.navigation}>
                <div>
                    <img src={iconWebPage} alt="Icon Web Page" />
                </div>
                <div>
                    <Link to="/">Inicio</Link>
                    <Link to='/breathing' >Respiración</Link>
                    <Link to='/meditation' >Meditación</Link>
                    <Link to='/recommendations'>Recomendaciones</Link>
                    <Link to='/advice' >Consejos</Link>
                </div>
                <div>
                    <Link to='/user_id'>Mi Perfil</Link>
                    <AccountCircleIcon />
                </div>
            </nav>
            <section>
                <Outlet />
            </section>
        </main>
    )
}

export default Navigation