import "./styles.css";
import logo from "../../assets/imagenesGaleria/Logo-RentaTools.svg.svg"
import HeaderButton from "../button"

const Header = () => {
    return(
        <div className="header-container">

            <div className="logo-container">
                <div className="logo">
                    <img src={logo}></img>
                </div>

                <div className="nombre-frase">
                    <h1>RentaTools</h1>
                    <h2>“Aqui se inicia  la construcción”</h2>
                </div>
            </div>

            <div className="nav-bar">
                <ul>
                    <li>
                        <HeaderButton className="crear-cuenta" buttonLabel="Crear Cuenta"/>
                    </li>
                    <li>
                        <HeaderButton className="iniciar-sesion" buttonLabel="Iniciar sesion"/>
                    </li>
                </ul>
            </div>

        </div>

    )
}
export default Header;