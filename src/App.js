import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Dashboard from './Pages/Dashboard'; // Make sure this path is correct
import Wallet from './Pages/Wallet';
import Market from './Pages/Market';
import FaqPage from './Pages/FaqPage';
import HelpPage from './Pages/HelpPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/market" element={<Market />} />
        <Route path="/faqpage" element={<FaqPage />} />
        <Route path="/helppage" element={<HelpPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
