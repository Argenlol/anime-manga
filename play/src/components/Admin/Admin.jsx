import { Link } from '@material-ui/core';
import React from 'react';
import { API } from '../helpers/constants';
import MangaList from '../Mangs/MangaList';
import Add from './Add'

const Admin = () => {
    return (
        <div>
            <Link to={`${API}/admin`}>
                <Add />
                <MangaList />
            </Link>
        </div>
    );
};

export default Admin;