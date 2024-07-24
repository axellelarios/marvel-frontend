import Title from '../components/Title' 

import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {

    const [comics, setComics] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
                <Title title="Find a Comic you like" />

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