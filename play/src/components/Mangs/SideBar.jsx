import React, { useContext, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Paper, makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MangaContext } from '../Contexts/MangaContextProvider';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        marginRight: '20px',
        marginBottom: '20px',
        minWidth: '170px',  
        maxWidth: '350px',  

        margin: 'auto'
    }
}))

const SideBar = () => {
    const history = useHistory()
    const classes = useStyles()
    const { getMangas } = useContext(MangaContext)
    const [type, setType] = useState(getType())
    const [price, setPrice] = useState(getPrice())

    function getPrice() {
        const search = new URLSearchParams(history.location.search)
        return search.get('price_lte')
    }

    function getType() {
        const search = new URLSearchParams(history.location.search)
        return search.get('type')
    }

    const handleChangePrice = (event, value) => {
        const search = new URLSearchParams(history.location.search)
        search.set('price_lte', value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getMangas(history)
        setPrice(value)
    }

    const handleChangeType = (event) => {
        if (event.target.value === 'all') {
            history.push(`${history.location.pathname.replace('type')}`)
            getMangas(history)
            setType(event.target.value)
            return
        }
        const search = new URLSearchParams(history.location.search)
        search.set('type', event.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getMangas(history)
        setType(event.target.value)
    }
    const handleDrop = () => {
        history.push(`${history.location.pathname.replace('type')}`)
        history.push(`${history.location.pathname.replace('price_lte')}`)
        getMangas(history)
        setType(getType())
        setPrice(getPrice())
    }
    return (

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '50px'

        }}>

            <Grid item md={3} >
                <Paper elevation={2} className={classes.paper}
                >
                    <FormControl component="fieldset"
                    >
                        <FormLabel component="legend">Manga</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={type} onChange={handleChangeType}>
                            <FormControlLabel value="Cheap " control={<Radio />} label="Cheap" />
                            <FormControlLabel value="Middle " control={<Radio />} label="Middle" />
                            <FormControlLabel value="Expensive " control={<Radio />} label="Expensive " />
                        </RadioGroup>
                    </FormControl>

                    <Grid >

                        <Button variant="contained" color="secondary" onClick={handleDrop}>Go</Button>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
};

export default SideBar;