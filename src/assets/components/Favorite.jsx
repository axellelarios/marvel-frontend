import Cookies from "js-cookie";
import React, { useState, useEffect, useRef } from "react"; 

const Favorite = ({data, type}) => {
    const [active, setActive] = useState(null);
    

    // Création fonction ajout favoris
    const addToCookies = (data) => {
        let charactersFavorite = Cookies.get();

        // Je check si la valeur est un tableau,
        if (!Array.isArray(charactersFavorite)) {
            charactersFavorite = [];
        }
        charactersFavorite.push(JSON.stringify(data));
        console.log(charactersFavorite)
        if (active == false) { 
            setActive(true) 
            Cookies.set(`fav${type}_${data._id}`, charactersFavorite, { expires: 7 });
        } else {
            setActive(false) 
            Cookies.remove(`fav${type}_${data._id}`);
        }
    }; 


    // On observe si cookie exsite = active sinon false
    useEffect(() => {
         if(Cookies.get(`fav${type}_${data._id}`)) {
            setActive(true)

         } else {
            setActive(false)
         } 
    }, []);
 

    return (
        <button className='add-to-favorite' onClick={() => addToCookies(data)}>
           <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill={active? "#ED171F" : "transparent"} stroke={active? "#ED171F" : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3.219 14.58L16 28L28.781 14.58C30.2018 13.0881 31 11.0647 31 8.95496C31 4.56155 27.608 1 23.4238 1C21.4145 1 19.4875 1.83811 18.0667 3.32995L16 5.50001L13.9333 3.32995C12.5125 1.83811 10.5855 1 8.57615 1C4.39195 1 1 4.56155 1 8.95496C1 11.0647 1.7982 13.0881 3.219 14.58Z" />
           </svg>
           <span>{active? "Enregistré" : "Ajouter aux favoris"}</span>
        </button>   
    )
}

export default Favorite;