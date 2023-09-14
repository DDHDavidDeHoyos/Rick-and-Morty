import estilos from "./Cards.module.css"
import Card from '../Card/Card';

const Cards = ({characters, onClose}) => {

      const mostrarCard = characters.map(({id, name, image}) => {
         return(
            <Card 
         key={id}
         id={id}
         name={name}
         image={image}
         onClose={onClose}
         />
      )
      });

   return (
      <div className={estilos.fondo}>
      {mostrarCard}
      </div>
   )
};

export default Cards;