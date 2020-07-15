import React, { Fragment } from 'react';
import OctopusItem from '../octopusItem/OctopusItem';
import Select from './../select/Select';
import Fade from 'react-reveal/Fade';


const Interactions = ({ interaction, index, handleSelectedActions, options }) => {
    return (
        <Fragment key={index}>
            <Fade left>
                <OctopusItem key={ImageBitmapRenderingContext} text={interaction}> </OctopusItem>
            </Fade>
            <Fade right>
                <Select
                    handleSelectedActions={handleSelectedActions}
                    options={options} />
            </Fade>
        </Fragment>
    );
};

export default Interactions;