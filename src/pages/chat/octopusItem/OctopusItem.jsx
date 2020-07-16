import React from 'react';
import './OctopusItem.css';
import octopusAvatar from './../../../assets/images/octopus.png';
import Fade from 'react-reveal/Fade';

const OctopusItem = ({ text }) => {

    return (
        <div className='octopus-item-container'>
            <img src={octopusAvatar} alt="octopus-avatar" />
            <div className="octopus-item-messages">
                {text.map((t, index) =>
                    <Fade
                        left
                        delay={300}
                        key={index}>
                        <label>
                            {t.indexOf('http') !== -1 ? <a href={t} rel="noopener noreferrer" target="_blank">Click aquí para ir al Perfil</a> : t}
                        </label>
                    </Fade>
                )}
            </div>
        </div>
    );
};

export default OctopusItem;