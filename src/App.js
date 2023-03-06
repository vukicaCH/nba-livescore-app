import './App.css';
import Navbar from './components/navbar/Navbar';
import Player from './components/player/Player';
import Games from './components/games/Games';
import Game from './components/game/Game';
import { Routes, Route } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import PlayersStatistics from './components/game/player statistics/PlayersStatistics';
import H2h from './components/game/h2h/H2h';
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Games />}/>
        <Route path='/games' element={<Games />}/> 
        <Route path='/player/:id' element={<Player />}/>
        <Route path='/game/:id' element={<Game />}>
          <Route path='/game/:id' element={<PlayersStatistics />} />
          <Route path='/game/:id/h2h' element={<H2h />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
