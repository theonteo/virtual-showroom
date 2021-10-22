import React from 'react';
import '../../App.css';
import Landing from '../Landing';
import LoadingManager from "../../Render/LoadingManager";
function Home()
{
    return (
        <>
            <LoadingManager />
            <Landing />
        </>
    );
}

export default Home;