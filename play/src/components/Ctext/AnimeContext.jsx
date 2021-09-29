import React, { useState, createContext } from "react";

export const AnimeContext = createContext();

export const AnimeContextProvider = (props) => {

    const [animes, setAnimes] = useState([])

    const [selectedAnime, setSelectedAnime] = useState(null)
    const addAnimes = (anime) =>{
        setAnimes([...animes,anime])
    }

    return (
        <AnimeContext.Provider value={{ animes, setAnimes,addAnimes,selectedAnime,setSelectedAnime }}>
            {props.children}
        </AnimeContext.Provider>
    )
};