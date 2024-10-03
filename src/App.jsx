import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';  // Import the ProfilePage component
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header /> {/* Header remains at the top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />  {/* New Profile Page route */}
      </Routes>
    </Router>
  );
}

export default App;
