import './App.css';
import CenterText from './components/center_text';
import Numeralia from './components/numeralia';
import Footer from './components/footer';
import RightImg from './components/right_img';
import Header from './components/header';
import MenuScreen from './components/menu_screen';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Transition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nosotros from './components/nosotros';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const defaultStyles = {
    transition: `opacity 3s ease-in-out`,
    opacity: 0,
  };

  const handleClick = () => setMenuOpened(!menuOpened);

  if (menuOpened) {

    return (
      <div>
        <Router>
          <Transition in={menuOpened} timeout={300}>
            {state => (
              <MenuScreen styles={{
                ...defaultStyles,
                ...transitionStyles[state]
              }} />
            )}
          </Transition>
          <Button className="menu-button" variant="contained" onClick={handleClick} endIcon={<FontAwesomeIcon icon={faXmark} />} />
          <Routes>
            <Route exact path="/nosotros" element={<Nosotros />} />
          </Routes>
        </Router >
      </div>
    );
  }

  return (
    <div>
      <Router>
        <Header />
        <CenterText />
        <RightImg />
        <Numeralia />
        <Footer />
        <Button className="menu-button" variant="contained" onClick={handleClick} endIcon={<FontAwesomeIcon icon={faCircleDot} className="menu-button-icon" />} />

        <Routes>
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </Router >
    </div >
  );

}

export default App;
