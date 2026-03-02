import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { QueEsTutela } from './pages/QueEsTutela';
import { Participantes } from './pages/Participantes';
import { ProcesoTutela } from './pages/ProcesoTutela';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutela" element={<App />} />
        <Route path="/que-es" element={<QueEsTutela />} />
        <Route path="/participantes" element={<Participantes />} />
        <Route path="/proceso" element={<ProcesoTutela />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}