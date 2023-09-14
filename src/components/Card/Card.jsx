import estilos from "./Card.module.css"
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({id, name, image, onClose, addFav, removeFav, myFavorites}) => {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      }else {
         setIsFav(true)
         addFav({id, name, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={estilos.container}>
      <div className={estilos.horizontal}>
         <p className={estilos.id}>{id}</p>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={estilos.close} onClick={() => {onClose(id)}}>X</button>
      </div>
      <div className={estilos.horizontal2}>
         <img className={estilos.img} src={image} alt='' />
         <NavLink to={`/detail/${id}`} >
            <h3 className={estilos.name}>{name}</h3>
         </NavLink>
      </div>
         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) },
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);