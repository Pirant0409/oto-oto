import React from 'react';
import './App.css';
import JoinRoom from './components/home/JoinRoom';
import CreateParty from './components/home/CreateParty';
import HomeNavbar  from './components/navbar/HomeNavbar';
import GameDescription from './components/home/GameDescription';

const App: React.FC = () => (
  
  <div className="h-screen">
    <HomeNavbar />
    <div className="flex">
      <GameDescription />
    </div>
    <div>
      <JoinRoom />
      <CreateParty />
    </div>
  </div>

);
export default App
