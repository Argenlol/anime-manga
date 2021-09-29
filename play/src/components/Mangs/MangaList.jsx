import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MangaContext } from '../Contexts/MangaContextProvider';

import { Pagination } from '@material-ui/lab';
import AuthContextProvider, { authContext } from '../Contexts/AuthContextProvider';
import MangaCard from './MangaCard';


const useStyles = makeStyles((theme) => ({
    pag: {
        color: 'white',
    }
}))
const MangaList = () => {
    const classes = useStyles()
    const history = useHistory()
    const { email } = useContext(authContext)
    const { anime, getMangas, paginatedPages } = useContext(MangaContext)
    const [page, setPage] = useState(getPage())
    console.log('tours from list', anime);
    useEffect(() => {
        getMangas(history)
    }, [])
    console.log(anime)
    function getPage(e, page) {
        const search = new URLSearchParams(history.location.search)
        if (!search.get('_page')) {
            return
        }
        return search.get('_page')
    }

    const handlePage = (e, pageVal) => {
        const search = new URLSearchParams(window.location.search)
        search.set('_page', pageVal)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getMangas(history)
        setPage(pageVal)
    }

    return (
        <>
            <Grid container spacing={3} justify="space-evenly" style={{ marginTop: '90px' }}>
                {
                    anime ? (
                        anime.map((item, index) => (
                            <MangaCard item={item} key={index} />
                        ))
                    ) : (<h1>Please wait...</h1>)
                }
            </Grid>

            <div
                style={{
                    paddingTop: '30px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex'

                }}
            >

                <Pagination className={classes.pag}
                    variant="outlined"
                    count={paginatedPages}
                    color='secondary'
                    onChange={handlePage}
                    page={+page}
                />
            </div>

           

        </>
    );
};

export default MangaList;