import Routes from './Routes';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Anime from './components/routes/Anime';
import UpdatePage from './components/routes/UpdatePage';
import { AnimeContextProvider } from './components/Ctext/AnimeContext';

function App() {

  return (

    <AnimeContextProvider>

      <div className='container'>
        <Router>
          <Switch>
            <Routes />
            <Route exact path="/" component={Anime} />
            <Route exact path="/animes/:id/update" component={UpdatePage} />
          </Switch>
        </Router>
      </div>

    </AnimeContextProvider>
  );
}

export default App;