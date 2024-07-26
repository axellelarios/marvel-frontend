// IMPORT DE MES COMPOSANTS
import Title from '../components/Title' 
import Loading from '../components/Loading' 

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
                `https://site--backend-marvel--z96jrv9g2mbz.code.run/character/${id}`
                );
                console.log(response.data)
                // On envoie les données à note state SetOffer
                setCharacter(response.data); 
            } catch (error) {
                console.log("this is an error >> " + error.response);
            }   
        setIsLoading(false);  
        };
        fetchData();
    }, []);

    console.log(character)

    return isLoading ? (
        <main>
           <div className="container"> 
               <Loading />         
           </div>
        </main>
     ): (
        <main>
            <div className="container">
                   <Title title={character.name} />
            </div>
        </main>
    ) 
}

export default Character;