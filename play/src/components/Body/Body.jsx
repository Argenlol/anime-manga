import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import Footer from './Footer';
import { Grid } from '@material-ui/core';
import HeaderAnime from '../component/HeaderAnime';
import AddAnime from '../component/AddAnime';
import AnimeList from '../component/AnimeList';
import MangaList from '../Mangs/MangaList';




const useStyles = makeStyles((theme) => ({

    thinithu: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100% ',
        height: '100%',
        objectFit: 'cover',
    },

    fullScreenContent: {
        padding: '50px, 15px',

        width: '100%',
        height: '603px',


        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flex: "1, 1, auto",
        justifyContent: 'center',
        alignItems: 'center ',
        flexDirection: 'column',
        textTransform: 'uppercase',
        marginTop: "-55px",
    },

    BodyfullScreenTitle: {
        alignItems: 'center',
        fontSize: '35px',
        letterSpacing: '17px',
        fontWeight: 700,
        color: 'white',
        marginTop:'40px'
    },
    content: {
        backgroundColor: 'brown',
        margin: 0
    },

    aboutContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textAbout: {
        color: 'white',
        fontSize: '20px',
        fontWeight: 700
    },
    titleAbout: {
        color: 'white',
        fontSize: '23px',
        marginBottom: '25px',
        width: '400px',
        paddingBottom: '30px',
        fontWeight: 700
    },
    topContent: {
        marginTop: "20px",
        borderRadius: 100,
        display: 'flex',
        width: '80px',
        height: '80px',
    }
}))




export default function Body() {
    const classes = useStyles()

    return (
        <>
            <Grid>
                <Container maxWidth='md' >
                    <div className={classes.fullScreen}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bdfa6e116613523.60655913d06f2.jpg" alt="" className={classes.thinithu}  />
                        <div className={classes.fullScreenContent}>
                            <div className={classes.BodyfullScreenTitle}>SEIIL</div>
                        </div>
                    </div>

                    <div className={classes.aboutContent}>
                        <div className={classes.topContent}></div>
                    </div>

                    <Container maxWidth="md" style={{
                        paddingTop: '30px'
                    }}>
                        <h2 style={{
                            color: 'white',
                            textAlign: "center"
                        }}>
                            One of the popular manga, you can see bellow.
                        </h2>
                        <div className={classes.contentOfBody}>
                            <MangaList />
                        </div>

                    <HeaderAnime/>
                    <AddAnime/>
                    <AnimeList/>                   


                    </Container>

                </Container >

            </Grid>

            <Footer />

        </>


    );
}
