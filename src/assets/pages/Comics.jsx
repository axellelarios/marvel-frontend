// IMPORT DES IMAGES
import GifNoResult from '../src/no-result_character.gif' 

// IMPORT CONPOSANTS
import Title from '../components/Title' 
import Loading from '../components/Loading' 
import Favorite from '../components/Favorite' 
import transition from '../js/Transition'; 

// IMPORT DES HOOKS
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Comics = () => {

    // CREATION DE MES STATE 
    const [search, setSearch] = useState("");
    const [comics, setComics] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleTitleChange = (event) => {
        setSearch(event.target.value)
    }

    // J'intialise mon filtre
    let filters = ""
    let limit = 100

    if (search){
        filters += `title=${search}`
    }
    
    filters += `&limit=${limit}`

    // On appelle un state UseEffect pour qu'a l"ouverture de mon offre va chercher les données via axios
    useEffect(() => {

        
        const fetchData = async () => {
            try {
                const response = await axios.get(
                `https://site--backend-marvel--z96jrv9g2mbz.code.run/comics?${filters}`
                );
                setComics(response.data); 
            } catch (error) {
                console.log("this is an error >> " + error.response);
            }   
        setIsLoading(false);  
        };
        fetchData();
    }, [search]);

    return isLoading ? (
        <main>
           <div className="container">
                <Loading />     
            </div>
        </main>
     ): (
        <main className="comics-main">
            <div className="container">
                <div className='header-content'>
                     <Title title="Find a Comic you like" /> 

                     <form className="header__search u-flexbox u-align-items-center u-fill-width u-justify-content-center">
                           <svg viewBox="0 0 16 16" width="16" height="16"><path d="M7 11.5a4.5 4.5 0 1 1 .01-9.01A4.5 4.5 0 0 1 7 11.5zm4.74-.82a6 6 0 1 0-1.06 1.06l3.25 3.25L15 13.93l-3.25-3.25z"></path></svg>
                           <input value={search} onChange={handleTitleChange} placeholder="Search a Comic..."></input>
                     </form>                   
                </div>
                

                <div className='results-wrapper'>
                        {
                        comics.results.length > 0 ?
                        comics.results.map((comicData, index) => {
                            let url = comicData.thumbnail.path + "." + comicData.thumbnail.extension
                            return (

                            <div className="result-item" key={"comicData" + index}> 
                                <Link  className='result-image' to={`/pages/comic/${comicData._id}`}key={"comicData" + index}><img src={url} /></Link>
                                <div className='result-title'>{comicData.title}</div>
                                <div className='result-description'>
                                        {comicData.description ?
                                        comicData.description.length > 100 ?
                                        `${comicData.description.substring(0, 80)}...` : comicData.description
                                        : <span></span>
                                        }
                                </div>
                                <Favorite data={comicData} type="Comic" />
                            </div>
                            )
                        }): 
                            <div className="no-result">
                                <div className='no-result--img'> <img src={GifNoResult} /> </div>
                                <div className='no-result--content'>No results were found for <strong className="red">{search}</strong></div>
                            </div>
                        }
                </div>
            </div>
        </main>
    )
}

export default transition(Comics);