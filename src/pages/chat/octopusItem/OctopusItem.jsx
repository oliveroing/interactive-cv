import React from 'react';
import './OctopusItem.css';
import octopusAvatar from './../../../assets/images/octopus.png';
import Fade from 'react-reveal/Fade';

const OctopusItem = ({ text }) => {
    return (
        <div className='cat-item-container'>
            <img src={octopusAvatar} alt="cat-avatar" />
            <div className="cat-item-messages">
                {text.map((t, index) =>
                    <Fade
                        left
                        delay={300}
                        key={index}>
                        <label>
                            {t}
                        </label>
                    </Fade>
                )}
            </div>
        </div>
    );
};

export default OctopusItem;