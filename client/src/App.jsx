import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import SingleGame from './page/SingleGame';
import BatlGame from './page/BatlGame';
import Registration from './components/Registration/Registration';
import LogIn from './components/LogIn/LogIn';
import RegLogIn from './page/RegLogIn';
import Alert from './components/Alert/Alert';
import Statistic from './components/Statistic/Statistic';
import CreateGame from './components/CreateGame/CreateGame';
import ConnectToGame from './components/ConnectToGame/ConnectToGame';
import MultiGamePage from './page/MultiGamePage';

function App() {
  const [selectedGame, setSelectedGame] = useState('');
  const [menuVisible, setMenuVisible] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();

  const handleSelectGame = (game) => {
    setSelectedGame(game);
    setMenuVisible(false);
    console.log(`Game selected in App: ${game}`);
    if (game === 'Одиночна гра') {
      navigate('/single-game');
    } else if (game === 'Дуель') {
      navigate('/batl-game');
    }
  };

  const handleLogin = (data) => {
    setIsAuthenticated(true);
    setMenuVisible(true); // Show the menu after login/registration
    setUserData(JSON.parse(data));
  };

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="/" element={<RegLogIn onLogin={handleLogin} />} />
      ) : (
        <>
          <Route path="/menu" element={<Menu onSelectGame={handleSelectGame} data={userData} />} />
          <Route path="/single-game" element={<SingleGame data={userData} />} />
          <Route path="/batl-game" element={<BatlGame data={userData} />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route path="/multi-gamePage" element={<MultiGamePage />} />
          <Route path="/conect-game" element={<ConnectToGame />} />
          <Route path="/statistic" element={<Statistic id={userData.user_id} />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="*" element={<Navigate to="/menu" />} />
        </>
      )}
    </Routes>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
