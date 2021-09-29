import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Body from './components/Body/Body';
import MangaContextProvider from './components/Contexts/MangaContextProvider';

import Edit from './components/Admin/Edit';
import Admin from './components/Admin/Admin';
import Cart from './components/Cart/Cart';
import Login from './components/Authorization/Login';
import Registration from './components/Authorization/Registration';
import AuthContextProvider from './components/Contexts/AuthContextProvider';
import MangaDetail from './components/Mangs/MangaDetail';
import Card from './components/CreditCard/Card'
import UpdatePage from './components/routes/UpdatePage';
import MangaList2 from './components/Mangas/MangaList2';





const Routes = () => {

    return (
        <AuthContextProvider>
            <MangaContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Switch>

                        <Route exact path="/" component={Body} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/list" component={MangaList2} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/edit/:id" component={Edit} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registration" component={Registration} />
                        <Route exact path='/card' component={Card} />
                        <Route exact path='/detail/:id' component={MangaDetail} />
                        <Route exact path='/animes/:id/update' component={UpdatePage} />
                    </Switch>
                </BrowserRouter>

            </MangaContextProvider>
        </AuthContextProvider>
    );
};

export default Routes;