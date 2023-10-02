
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

import Cars from './pages/Cars';
import Home from './pages/Home';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page/:id" element={<Cars />} />
      </Routes>
    </Router>
  );
}


export default App;
