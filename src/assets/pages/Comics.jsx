import Title from '../components/Title' 

import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Comics = ({search, setSearch}) => {

    const [comics, setComics] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const handleTitleChange = (event) => {
        setSearch(event.target.value)
    }

    // On appelle un state UseEffect pour qu'a l"ouverture de mon offre va chercher les données via axios
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                `https://site--backend-marvel--z96jrv9g2mbz.code.run/comics/`
                );
                console.log(response.data)
                // On envoie les données à note state SetComics
                setComics(response.data); 
            } catch (error) {
                console.log("this is an error >> " + error.response);
            }   
        setIsLoading(false);  
        };
        fetchData();
    }, []);

    return isLoading ? (
        <main className="loading">
           <div className="container">Chargement...</div>
        </main>
     ): (
        <main>
            <div className="container">
                <div className='header-content'>
                     <Title title="Find a Comic you like" /> 

                     <form className="header__search u-flexbox u-align-items-center u-fill-width u-justify-content-center">
                           <svg viewBox="0 0 16 16" width="16" height="16"><path d="M7 11.5a4.5 4.5 0 1 1 .01-9.01A4.5 4.5 0 0 1 7 11.5zm4.74-.82a6 6 0 1 0-1.06 1.06l3.25 3.25L15 13.93l-3.25-3.25z"></path></svg>
                           <input value={search} onChange={handleTitleChange} placeholder="Search a Comic..."></input>
                     </form>                   
                </div>
                

                <div className='results-wrapper'>
                        {comics.results.map((picture, index) => {
                            let url = picture.thumbnail.path + "." + picture.thumbnail.extension
                            return (
                            <div className='result-item' key={"picture" + index}> <img src={url} /> </div>
                            )
                        })}
                </div>
            </div>
        </main>
    )
}

export default Comics;