import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/pages/Login';
import GestaoCampos from './components/pages/GestaoCampos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/gestaocampos' element={<GestaoCampos />} />
      </Routes>
    </Router>
  );
}

export default App;
