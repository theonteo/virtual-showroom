import React from 'react';
import '../../App.css';

import Footer from '../Footer';
import Landing from '../Landing';
import LoadingManager from "../../Render/LoadingManager";
function Home()
{
    return (
        <>
            <LoadingManager/>
            <Landing/>
            <Footer/>
        </>
    );
}

export default Home;