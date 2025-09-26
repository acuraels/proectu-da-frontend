import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NotFound from './components/NotFound/NotFound.tsx';
import HomePage from './pages/HomePage.tsx';
import EventPage from './pages/EventPage.tsx';
import TeamPage from './pages/TeamPage.tsx';

function App() {
  return (
    <BrowserRouter basename='/proectu-da-frontend/'>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
