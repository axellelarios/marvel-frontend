
// IMPORT DE MES COMPOSANTS
import Title from '../components/Title' 
import transition from '../js/Transition'; 

// IMPORT DE MES HOOKS
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
 
const Favoris = () => {
   
    const [favorites, setFavorites] = useState({data: []});

    useEffect(() => { 
          const allCookies = Cookies.get();
          //console.log(Object.keys(allCookies))
          const favoriteTable = Object.keys(allCookies).map((key) => JSON.parse(allCookies[key]));
          setFavorites({data: favoriteTable});
    }, []);

    //console.log(favorites)

    return (
        <main className='home index'>
            <div className="container">
                <div className='header-content'> 
                    <Title title="Your favorites" />
                </div> 

                <div className='results-wrapper'>
                    {favorites.data.map((data, index) => { 
                        let url = data.thumbnail.path + "/standard_medium" +  "." + data.thumbnail.extension
                        return (
                            <div className='result-item' key={data.id + index}> 
                                <Link  className='result-image' to={`/pages/comic/${data._id}`} ><img src={url} /></Link>
                                <div className='result-title'>{data.title ? data.title : data.name}</div>
                            </div>
                       )}
                    )} 

                </div>
            </div>
        </main> 
    )
}


export default transition(Favoris);