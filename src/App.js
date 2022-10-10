import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CreateMeetup from './pages/CreateMeetup';
import Explore from './pages/Explore';

/** Pages */
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';

const App = () => {

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus([
      {
        name: "Home",
        path: "/"
      },
      {
        name: "Create Meetup",
        path: "/create-meetup"
      },
      {
        name: "Explore",
        path: "/explore"
      }
    ]);
  }, []);

  return (
    <>
      <Header title="Qtemu" menus={menus} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/create-meetup" element={<CreateMeetup />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
