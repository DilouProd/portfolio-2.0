import React from 'react';
import Navigation from '../components/Navigation/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Dylan Moreira</h1>
                    <h2>Technicien Support Réseau</h2>
                    <div className="pdf">
                        <a href="./media/cv_Dylan_MOREIRA.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;