import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/pages/Login';
import PaginaBase from './components/pages/PaginaBase'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/paginabase' element={<PaginaBase />} />
      </Routes>
    </Router>
  );
}

export default App;
