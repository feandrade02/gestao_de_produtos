import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/pages/Login';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div>
       <Header />
       <Navbar />
       <Login />
    </div>
  );
}

export default App;
