"use client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './classes/LivroLista';
import LivroDados from './classes/componentes/LivroDados';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Lista
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dados">
              Dados
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </Router>
  );
}
