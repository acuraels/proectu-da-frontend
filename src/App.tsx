import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NotFound from './components/NotFound/NotFound.tsx';
import InProgreess from './components/InProgress/InProgress.tsx';
import HomePage from './pages/HomePage.tsx';
import NewsPage from './pages/NewsPage.tsx';
import EventPage from './pages/EventPage.tsx';
import TeamPage from './pages/TeamPage.tsx';
import LoginPage from './pages/LoginPage.tsx';

function App() {
  return (
    <BrowserRouter basename='/proectu-da-frontend/'>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
