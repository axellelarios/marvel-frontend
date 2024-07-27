import Cookies from "js-cookie";
import React, { useState, useEffect, useRef } from "react"; 

const Favorite = ({charaData}) => {
    const [active, setActive] = useState(false);
    // Création fonction ajout favoris


    useEffect(() => {
         if(Cookies.get(`favCharacter_${charaData._id}`)) {
            setActive(true)
         } else {
            setActive(false)
         } 
    }, [active]);


    const addToCookies = (charaData) => {
        let charactersFavorite = Cookies.get();
        console.log(charactersFavorite)
        // Je check si la valeur est un tableau,
        if (!Array.isArray(charactersFavorite)) {
            charactersFavorite = [];
        }
        charactersFavorite.push(JSON.stringify(charaData));
        if(!active) {
             
            Cookies.set(`favCharacter_${charaData._id}`, charactersFavorite, { expires: 7 });
            setActive(true) 
        }else {
            setActive(false) 
            Cookies.remove(`favCharacter_${charaData._id}`);
        }

    };  

    return (
        <button className='add-to-favorite' onClick={() => addToCookies(charaData)}>
           <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill={active? "white" : "transparent"} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3.219 14.58L16 28L28.781 14.58C30.2018 13.0881 31 11.0647 31 8.95496C31 4.56155 27.608 1 23.4238 1C21.4145 1 19.4875 1.83811 18.0667 3.32995L16 5.50001L13.9333 3.32995C12.5125 1.83811 10.5855 1 8.57615 1C4.39195 1 1 4.56155 1 8.95496C1 11.0647 1.7982 13.0881 3.219 14.58Z" />
           </svg>
        </button>   
    )
}

export default Favorite;