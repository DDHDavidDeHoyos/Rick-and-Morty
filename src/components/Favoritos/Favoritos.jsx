import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

const Favoritos = ({myFavorites}) => {

    const renderFav = myFavorites.map(({id, name, image}) => {
        return(
           <Card 
        key={id}
        id={id}
        name={name}
        image={image}
        />
     )
    });

    const [aux, setAux] = useState(false);

     const dispatch = useDispatch();

     const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true);
     }

     const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
     }

    return(
        <>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            {renderFav}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites
    }
 }

export default connect(
    mapStateToProps,
    null
)(Favoritos);