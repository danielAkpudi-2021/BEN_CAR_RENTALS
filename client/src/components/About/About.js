import React from 'react';
import { Grid } from '@material-ui/core';

import car from '../../images/car.jpg';

import useStyles from './styles';

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.margin} justifyContent='center' >
            <Grid sm={12}>
                <img src={car} alt="Car" width="60%" height="100%" />
            </Grid>
        </div>
    )
}

export default About
