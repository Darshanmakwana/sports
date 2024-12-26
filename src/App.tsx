import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Athletes from './pages/Athletes';
import Events from './pages/Events';
import Company from './pages/Company';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/events" element={<Events />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;