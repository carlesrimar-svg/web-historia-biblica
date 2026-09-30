import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PaisDeJesus from './pages/PaisDeJesus';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biblia" element={<UnderConstruction />} />
          <Route path="/antic-testament" element={<UnderConstruction />} />
          <Route path="/nou-testament" element={<UnderConstruction />} />
          <Route path="/nou-testament/pais-de-jesus" element={<PaisDeJesus />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
