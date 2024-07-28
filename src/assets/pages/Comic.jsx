// IMPORT DE MES COMPOSANTS
import Title from '../components/Title' 
import Loading from '../components/Loading'  
import Favorite from '../components/Favorite' 
import transition from '../js/Transition'; 

// IMPORT DES HOOKS
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Comic = () => {
    // Je récupère le params envoyé dans l'url
    const { id } = useParams();

    const [comic, setComic] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // On appelle un state UseEffect pour qu'a l"ouverture de mon personnage va chercher les données via axios
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                `https://site--backend-marvel--z96jrv9g2mbz.code.run/comic/${id}`
                );
                setComic(response.data); 
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
                <div className="hero-content hero-comic">
                     <div className="image-hero"><img src={comic.thumbnail.path + "." + comic.thumbnail.extension} /></div> 
                     <div className="description-hero">
                       <Title title={comic.title } />
                       {comic.description}
                       <div className='hero-short_links'>
                           <Favorite data={comic} type="comic"/>
                       </div>
                     </div>                
                </div>        
                <div className="results-wrapper">
    
                </div>
            </div>
        </div>
    </main>
    )
}

export default transition(Comic);