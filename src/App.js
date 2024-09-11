import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/pages/Login';
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div>
       <Navbar />
       <Login />
    </div>
  );
}

export default App;
