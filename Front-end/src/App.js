import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Paginiciotaller from './Pages/Paginiciotaller';
import InfoCuentaTaller from './Pages/InfoCuentaTaller';
import Maquinas from './Pages/Maquinas';
import InicioEmpresa from './Pages/InicioEmpresa';
import RegistroCalificaciones from './Pages/RegistroCalificaciones';
import HistorialPeticiones from './Pages/HistorialPeticiones';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Paginiciotaller" element={<Paginiciotaller/>} />
        <Route path="/InfoCuentaTaller" element={<InfoCuentaTaller/>}/>
        <Route path="/Maquinas" element={<Maquinas/>}/>
        <Route path="/InicioEmpresa" element={<InicioEmpresa/>}/>
        <Route path="/HistorialPeticiones" element={<HistorialPeticiones/>}/>
        <Route path="/RegistroCalificaciones" element={<RegistroCalificaciones/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
