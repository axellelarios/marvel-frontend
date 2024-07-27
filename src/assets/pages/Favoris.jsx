
// IMPORT DE MES COMPOSANTS
import Title from '../components/Title' 

// IMPORT DE MES HOOKS
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";


const Favoris = () => {
    return (
        <main className='home index'>
            <div className="container">
                <div> 
                    <Title title="Your favorites" />
                    
                </div> 
            </div>
        </main> 
    )
}

export default Favoris;