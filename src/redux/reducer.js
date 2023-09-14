import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }

        case FILTER:

            const filterAll =state.allCharacters.filter(character => character.gender === payload)

            return {
                ...state,
                myFavorites: filterAll
            }

        case ORDER:

            const allCharactersCopy = [...state.allCharacters]

            return {
                ...state,
                myFavorites:
                payload === "A"
                ? allCharactersCopy.sort(function(a, b){return a.id - b.id})
                : allCharactersCopy.sort(function(a, b){return b.id - a.id})
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;