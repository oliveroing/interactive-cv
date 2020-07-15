import React from 'react';
import Octopus from './components/octopus/Octopus.jsx';
import './Home.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Home = ({ history }) => {
    return (
        <div className='home-octopus-container'>
            <div className='home-octopus-content'>
                <Bounce top>
                    <Octopus history={history}></Octopus>
                </Bounce>
                <div className="home-octopus-greeting">
                    <Fade left>
                        <h1> ¡Hola humano! </h1>
                    </Fade>
                    <Fade right>
                        <label> ¿Quieres conocer acerca del perfil de Lucas Olivero? </label>
                        <label> ¡Haz click sobre mí para comenzar! </label>
                    </Fade>
                </div>

            </div>

        </div>
    )
};

export default Home;

