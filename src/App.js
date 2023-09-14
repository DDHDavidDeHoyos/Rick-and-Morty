import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';
import Error from './components/Error/Error';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Favoritos from './components/Favoritos/Favoritos';

function App() {

const [characters, setCharacters] = useState([]);

const [access, setAccess] = useState(false);

const EMAIL = "david04@gmail.com";
const PASSWORD = "123654";

const char = [];

if (characters){
   for (let i = 0; i < characters.length; i++){
      char.push(characters[i].id);
   }
}

const onSearch = (id) => {
   let numId = parseInt(id);

   if (numId > 0 && numId < 827  ){
      if (!char){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      }
      });
   }else if (char.includes(numId) === false){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      }
      });
   }else return;
   }else{
      window.alert('¡No hay personajes con este ID!');
   }
}


const random = (id) => {
   let numId = parseInt(id);

   if (char.includes(numId) === false){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      }
      });
   }
}

const onClose = (id) => {
   const char = characters.filter((character) => character.id !== parseInt(id));
   setCharacters(char);
}

const location = useLocation();
const navigate = useNavigate();

const login = (userData) => {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

const logOut = () => {
   setCharacters([]);
   setAccess(false);
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

   return (
      
      <div className='App'>
         {location.pathname !== "/" && <Nav logOut={logOut} random={random} onSearch={onSearch}/>}
         <Routes>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favoritos/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>
      </div>
   );
}

export default App;
