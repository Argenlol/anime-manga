import React,{useContext, useEffect} from 'react';
import { useHistory } from 'react-router';
import AnimeFinder from '../apis/AnimeFinder';
import { AnimeContext } from '../Ctext/AnimeContext';

const AnimeList = (props) => {
    const { animes, setAnimes} = useContext(AnimeContext)
    let history = useHistory()

    useEffect(() =>{
        const fetchData = async () =>{
            try {
             const response = await  AnimeFinder.get("/")
             setAnimes(response.data.data.anime)
            } catch (error) {}
        } 
        fetchData();
        },[])

    const handleDelete = async (e,id) =>{
        e.stopPropagation()
        try {
         const response =  AnimeFinder.delete(`/${id}`)
         setAnimes(
             animes.filter((anime) =>{
             return anime.id !== id
         }))
        } catch (error) {
            console.log(error);
        }
    }    

    const handleUpdate =  (e,id) =>{
        e.stopPropagation()
        history.push(`/animes/${id}/update`)
    }

    const handleAnimeSelect = (id) =>{
        history.push(`/animes/${id}`)
    }

    return (
        <div className='list-group'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope='col'>Animes</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Price Range</th>
                        <th scope='col'>Reatings</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { animes && animes.map((anime) =>{
                        return(
                        <tr onClick={() => handleAnimeSelect(anime.id)} key = {anime.id}>
                            <td>{anime.name}</td>
                            <td>{anime.location}</td>
                            <td>{"$".repeat(anime.price_range)}</td>
                            <td>reviews</td>
                            <td><button onClick={(e) => handleUpdate(e,anime.id)} className='btn btn-warning'>Update</button></td>
                            <td><button onClick={(e) => handleDelete(e,anime.id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AnimeList;