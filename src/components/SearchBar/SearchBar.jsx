import estilos from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({onSearch}) => {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={estilos.div}>
         <input className={estilos.input} placeholder="Ingrese un ID 1/826" onChange={handleChange} value={id} type='search' />
         <button className={estilos.btn} onClick={() =>onSearch(id)}>Agregar</button>
      </div>
   );
}
export default SearchBar;