
// IMPORT CONPOSANTS
import Title from '../components/Title' 
import Loading from '../components/Loading' 

// IMPORT DES HOOKS
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {

    // CREATION DE MES STATE 
    const [comics, setComics] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // On appelle un state UseEffect pour qu'a l"ouverture de mon offre va chercher les données via axios
    useEffect(() => {

        const shuffle = (array) => {
            for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
        };

        const fetchData = async () => {
            try {
                const response = await axios.get(
                `https://site--backend-marvel--z96jrv9g2mbz.code.run/comics`
                );

                const data = response.data.results;
                shuffle(data);
                console.log(data)
                setComics(data); 
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
        <main className='home index'>
            <div className="container">
                    <div className='header-content'>
                       <Title title="Hot's comics" />
                    </div>
                    <div className='homepage-main'> 
                        { 
                            comics.map((comicData, index) => {
                                if (index < 3) {
                                    let url = comicData.thumbnail.path + "." + comicData.thumbnail.extension
                                    return (
                                    <div className='homepage-hero' key={"comicData" + index}>                                   
                                        <div className='homepage-image'><img src={url} /></div>
                                        <div className='homepage-content'>
                                           <div className='result-title'> {comicData.title}</div>                                          
                                        </div>                                        
                                    </div>
                                    )
                                }
                            })
                        }                 
                    </div>
            </div>
        </main> 
    )
}

export default Home;