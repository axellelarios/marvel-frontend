
// IMPORT DE MES COMPOSANTS
import Title from '../components/Title' 
import transition from '../js/Transition'; 

// IMPORT DE MES HOOKS
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Favoris = () => {

    console.log(Cookies.get())

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {

        //const characterFavorites = JSON.parse(
         //   Cookies.get()("characterFavorites") || "[]"
        // );
         //setFavorites({ ...characterFavorites, ...comicFavorites });

      }, []);

    return (
        <main className='home index'>
            <div className="container">
                <div className='header-content'> 
                    <Title title="Your favorites" />
                </div> 
                <div>
 
   
                </div>
            </div>
        </main> 
    )
}

export default transition(Favoris);