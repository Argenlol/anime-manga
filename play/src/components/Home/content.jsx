import { Grid } from '@material-ui/core';
import React from 'react';
import MangaList from '../Tours/MangaList';

const content = () => {
    return (
        <Grid item md={9}>
            <MangaList />
        </Grid>
    );
};

export default content;