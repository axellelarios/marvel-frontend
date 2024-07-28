
// IMPORT CONPOSANTS
import Title from '../components/Title' 
import Loading from '../components/Loading' 
import transition from '../js/Transition'; 

// IMPORT DES HOOKS
import React, { useState, useEffect, useRef } from "react"; 
import axios from "axios";
import { Link } from "react-router-dom";
 
const Home = () => {
    // CREATION DE MES STATE 
    const [comics, setComics] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        // J'ajoute une class spefique a mon composant home
        document.body.classList.add('index');
        // Pour mettre un ordre random à mon array
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
                setComics(data); 

            } catch (error) {
                console.log("this is an error >> " + error.response);
            }   
        setIsLoading(false);  

        };
        fetchData();
        return function cleanup() {
            document.body.classList.remove('index');
        };

    }, []);

    return isLoading ? (
        <main>
           <div className="container">
                <Loading />     
            </div>
        </main>
     ): (

		<main data-scroll-container ref={scroll}>
				<div className="content gallery-content">
                    <div className='main-heading'>
                         <Title title="Discover all Marvel's digital & print comics" /> 
                         <Link className="link button primary-button" to="/pages/comics">Browse all Comics</Link>
                    </div>
					<div className="gallery" data-scroll data-scroll-speed={6}>
 
                      {comics.map((comicData, index) => {
                                let url = comicData.thumbnail.path + "." + comicData.thumbnail.extension
                                if (index < 40) {
                                    return (
                                        <figure  key={comicData.thumbnail.path + index} className="gallery__item">
                                            <div className="gallery__item-img">
                                                <div className="gallery__item-imginner" data-scroll="" data-scroll-speed="-0.8">
                                                    <img className="content__img" src={url} />
                                                </div>
                                            </div>
                                            <figcaption className="gallery__item-caption">
                                                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">{comicData.name}</h2>
                                            </figcaption>
                                        </figure>                                             
                                    )
                                }
                            })
                        }   
					</div>
				</div>
			</main>
 
    )
}

export default transition(Home);