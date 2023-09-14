import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import estilos from "./Nav.module.css"
import imgOff from "./img/off.png"
import imgRM from "./img/R&M.png"

const Nav = ({onSearch, random, logOut}) => {

    const newId = () => {
        const numId =Math.round(Math.random()*(826-1)+parseInt(1));
        return (numId.toString());
    }

    return(
        <div className={estilos.nav}>
        <NavLink to='/home'><img className={estilos.img1} src={imgRM} alt=""/></NavLink>
        <NavLink to='/favorites'>Favoritos</NavLink>
        <NavLink className={estilos.about} to='/about'>Sobre mi</NavLink>
        <button className={estilos.random} onClick={() => random(newId())}>Aleatorio</button>
        <SearchBar onSearch={onSearch}/>
        <button className={estilos.btnOff} onClick={logOut}><img className={estilos.img2} src={imgOff} alt=""/></button>
        </div>
    )
}

export default Nav;