import Navbar from './components/Navbar';
import Home from './pages/Home';
import Friends from './pages/Friends';
import { Route, Routes } from "react-router-dom";


function App() {
  
  return (
  <>
    <Navbar />
    < div className="container">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
    </div>
  </>
  );
}

export default App;
