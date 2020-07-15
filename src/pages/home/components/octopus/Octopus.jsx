import React from 'react';
import Lottie from 'react-lottie';
import animationOctopus from './octopus.json';
import './Octopus.css';

const Octopus = ({ history }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationOctopus
    };

    function handleonClick() {
        history.push('/chat');
    };

    return (
        <div onClick={handleonClick}
            className='octopus-container'>
            <Lottie
                options={defaultOptions}
            />
        </div>
    );

}

export default Octopus;