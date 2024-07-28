// IMPORT DE MES COMPOSANTS
import Title from '../components/Title' 
import Loading from '../components/Loading'  
import Favorite from '../components/Favorite' 
import transition from '../js/Transition'; 
// IMPORT DES HOOKS
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Character = () => {
    // Je récupère le params envoyé dans l'url
    const { id } = useParams();

    const [character, setCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // On appelle un state UseEffect pour qu'a l"ouverture de mon personnage va chercher les données via axios
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                `https://site--backend-marvel--z96jrv9g2mbz.code.run/comics/${id}`
                );
                setCharacter(response.data); 
            } catch (error) {
                console.log("this is an error >> " + error.response);
            }   
        setIsLoading(false);  
        };
        fetchData();
    }, []);



    return isLoading ? (
        
        <main>
           <div className="container"> 
               <Loading />         
           </div>
        </main>
     ): (
        <main>
            <div className="container">
                <div className="detail-card"> 
                    <div className="hero-content hero-character">
                         <div className="image-hero"><img src={character.thumbnail.path + "." + character.thumbnail.extension} /></div> 
                         <div className="description-hero">
                           <Title title={character.name } />
                           {character.description}
                           <div className='hero-short_links'>
                               <Favorite data={character} type="Character"/>
                           </div>
                         </div>                
                    </div>        
                    <div>
                       <h3>{character.comics.length + " comics" }</h3>
                    </div>
                    <div className="results-wrapper">
                            {
                            character.comics.length > 0 ?
                            character.comics.map((comicData, index) => {
                                let url = comicData.thumbnail.path + "." + comicData.thumbnail.extension
                                return (
                                
                                <div className='result-item' key={"comicData" + index}> 
                                    <div className='result-image'><img src={url} /></div>
                                    <div className='result-title'>{comicData.title}</div>
                                    <div className='result-description'>
                                            {comicData.description ?
                                            comicData.description.length > 100 ?
                                            `${comicData.description.substring(0, 100)}...` : comicData.description
                                            : <span></span>
                                            }
                                    </div>
                                    <Favorite data={comicData} type="Comic"/>
                                </div>
                                )
                            }): 
                                <div className="no-result">
                                    <div className='no-result--content'>No results were found</div>
                                </div>
                            }
                    </div>
                </div>
            </div>
        </main>
    ) 
}

export default transition(Character);