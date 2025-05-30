import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { supabase } from './supabase';
import { AppProvider } from './Contexto/contexto';

// Importa tus componentes desde la carpeta "Componentes"
import Login from './Componentes/Login';
import Lista from './Componentes/Listas';
import Usuario from './Componentes/Usuario';
import Aleatorios from './Componentes/Aleatorios';
import Capturados from './Componentes/Capturados';
import Favoritos from './Componentes/Favoritos';
import Administrador from './Componentes/Administrador';
import Pokemon from './Componentes/Pokemon';
import Registro from './Componentes/Registro';
import Menu from './Componentes/Menu';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }

    verificarSesion();

    supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <AppProvider>
      <Router>
        {usuario && <Menu usuario={usuario} />}  {/* Asegurándonos de pasar 'usuario' al Menu */}
        <Routes>
          <Route path="/" element={usuario ? <Lista /> : <Navigate to="/login" />} />
          <Route path="/usuarios" element={usuario ? <Usuario /> : <Navigate to="/login" />} />
          <Route path="/aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} />
          <Route path="/capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} />
          <Route path="/favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
          <Route path="/detalle/:name" element={usuario ? <Pokemon /> : <Navigate to="/login" />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/admin" element={usuario && usuario.roll === 'admin' ? <Administrador /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
