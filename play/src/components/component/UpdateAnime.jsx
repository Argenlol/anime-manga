import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import AnimeFinder from '../apis/AnimeFinder';
import { AnimeContext } from '../Ctext/AnimeContext';

const UpdateAnime = (props) => {
    const { id } = useParams()
    let history = useHistory()
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")
    const { animes } = useContext(AnimeContext)
    console.log(id)
    useEffect(async () => {
        const fetchData = async () => {
        const response = await axios.get(`http://localhost:3001/api/v1/Animes/${id}`);
        console.log(response);
        setName(response.data.data.anime.name)
        setLocation(response.data.data.anime.location)
        setPriceRange(response.data.data.anime.price_range)
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedAnime = await AnimeFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange,
        });
        console.log(updatedAnime);
    };
    console.log(name)
    return (
        <div>
            <form action="" >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} type="text" onChange={(e) => setName(e.target.value)} id="name" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input value={location} type="text" onChange={(e) => setLocation(e.target.value)} id="location" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="price_range">Price Range</label>
                    <input value={priceRange} type="number" onChange={(e) => setPriceRange(e.target.value)} id="price_range" className="form-control" />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default UpdateAnime;