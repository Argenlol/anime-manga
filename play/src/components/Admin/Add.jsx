import React, { useState, useContext } from 'react';
import { IconButton, Paper, TextField, makeStyles, Button } from '@material-ui/core';
import { MangaContext } from '../Contexts/MangaContextProvider';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto',
        marginTop: '100px',
        backgroundColor:'white'
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '45ch',
        }
    }
}))

const Add = () => {
    const classes = useStyles()
    const history = useHistory()
    const [values, setValues] = useState({
        title: '',
        image: '',
        type: '',
        price: '',
        description: ''
    })

    const { addTour } = useContext(MangaContext)
    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        if (!values.image) values.image = "https://lh6.googleusercontent.com/proxy/5YUVHiA1x4KXBMvcnQ_fNcsGFQig9vpKgEbH98vc3mIx6963Jawv4WtVMemvIEdCHGpo60iD8t0OfwnHu5wY5InXTyqTPZx4a77T7iIFnHti=w3840-h2160-p-k-no-nd-mv"
        addTour(values)
        history.push('/list')
    }



    return (
        <Paper elevation={3} className={classes.paper} >
            <h1 style={{ textAlign: 'center' }}>ADD MANGA</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', color: 'black' }}>
                <div>
                    <img style={{ height: '450px', width: '450px' }} src={values.image ? values.image : "https://s1.livelib.ru/boocover/1002717945/o/3ab7/__Tvojo_imya._Tom_1.jpeg"} alt="Manga image" />
                </div>
                <div
                    style={{
                        width: "450px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <form className={classes.root} noValidate autoComplete='off'>
                        <TextField name='title' onChange={handleInp} value={values.title} variant='outlined' label="Title" />
                        <TextField name='image' onChange={handleInp} value={values.image} variant='outlined' label="Image" />
                        <TextField name='type' onChange={handleInp} value={values.type} variant='outlined' label="Type" />
                        <TextField name='price' onChange={handleInp} value={values.price} variant='outlined' label="Price" />
                        <TextField name='description' onChange={handleInp} value={values.description} variant='outlined' label="Description" />
                    </form>
                    <IconButton onClick={handleSave}>
                        <Button variant="contained" color="secondary">Add</Button>
                    </IconButton>
                </div>
            </div>
        </Paper>
    );
};

export default Add;










