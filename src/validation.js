const validation = (userData) => {

    let errores = {};

    if (userData.email.length < 1){
        errores.email = "ingrese un email";
    }else if (!/\S+@\S+\.\S+/.test(userData.email)){
        errores.email = "El email es invalido";
    }else if (userData.email.length > 35){
        errores.email = "el email no puede tener mas de 35 caracteres";
    };
    
    if (!userData.password){
        errores.password = "ingrese una contraseña";
    }else if (!/^(?=.*\d).{6,10}$/.test(userData.password)){
        errores.password = "debe tener entre 6-10 caracteres y al menos 1 numero";
    }

    return errores;
}

export default validation;