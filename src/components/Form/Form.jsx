import img from './img/RickAndMortypng.png'
import estilo from "./Form.module.css"
import { useState } from "react";
import validation from "../../validation";

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email : '',
        password : '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={estilo.fondo}>
            <img className={estilo.img} src={img} alt=''/>

            <form className={estilo.login} onSubmit={handleSubmit}>

            <div className={estilo.part}>
            <label className={estilo.label} htmlFor="email">Email:</label>
            <input className={estilo.input} onChange={handleChange} placeholder="ingrese un email" type="email" name="email" value={userData.email}/>
            {errors.email && <p className={estilo.error}>{errors.email}</p>}
            </div>

            <div className={estilo.part}>
            <label className={estilo.label} htmlFor="password">Password:</label>
            <input className={estilo.input} onChange={handleChange} placeholder="ingrese una password" type="password" name="password" value={userData.password}/>
            {errors.password && <p className={estilo.error}>{errors.password}</p>}
            </div>

            <div className={estilo.part}>
            <button className={errors.email || errors.password ? estilo.noButton : estilo.button}>Submit</button>
            </div>

        </form>
        </div>
        
    )
}

export default Form;