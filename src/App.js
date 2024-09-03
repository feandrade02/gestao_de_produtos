import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header';
import Login from './components/pages/Login';

function App() {
  return (
    <div>
      <Header/>
      <Login />
    </div>
  );
}

export default App;
