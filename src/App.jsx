import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from
'react-router-dom';
import { AppProvider } from './Contexto/contexto';
import { supabase } from "./supabase";
import Menu from './Componentes/Menu';
import Aleatorios from './Componentes/Aleatorios';
import Lista from './Componentes/Listas';
import Capturados from './Componentes/Capturados';
import Favoritos from './Componentes/Favoritos';
import Usuarios from './Componentes/Usuario';
import Detalle from './Componentes/detalle';
import Login from './Componentes/login';
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
// Escucha cambios en la sesión
supabase.auth.onAuthStateChange((_event, session) => {
setUsuario(session?.user || null);
});
}, []);
if (cargando) return <p>Cargando...</p>;
return (
<AppProvider>
<Router>
{usuario && <Menu />}
<Routes>
<Route path="/" element={usuario ? <Lista /> : <Navigate to="/login"
/>} />
<Route path="/usuarios" element={usuario ? <Usuarios /> : <Navigate
to="/login" />} />
<Route path="/aleatorios" element={usuario ? <Aleatorios /> :
<Navigate to="/login" />} />
<Route path="/capturados" element={usuario ? <Capturados /> :
<Navigate to="/login" />} />
<Route path="/favoritos" element={usuario ? <Favoritos /> :
<Navigate to="/login" />} />
<Route path="/detalle/:name" element={usuario ? <detalle /> :
<Navigate to="/login" />} />
<Route path="/login" element={<Login/>} />
</Routes>
</Router>
</AppProvider>
);
}
export default App;