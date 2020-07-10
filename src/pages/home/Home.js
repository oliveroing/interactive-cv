import React from 'react';
import Cat from './components/cat/Cat';
import './Home.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Home = ({ history }) => {
    return (
        <div className='home-catbot-container'>
            <div className='home-catbot-content'>
                <Bounce top>
                    <Cat history={history}></Cat>
                </Bounce>
                <div className="home-catbot-greeting">
                    <Fade opposite>
                        <h1> ¡Hola humano! </h1>
                    </Fade>
                    <Fade opposite>
                        <label> ¿Quieres conversar? </label>
                        <label> ¡Haz click sobre mí para comenzar! </label>
                    </Fade>
                </div>

            </div>

        </div>
    )
};

export default Home;

