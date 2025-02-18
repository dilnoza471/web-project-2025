
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importing routing
import App from './App';
import Menu from './menu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* Homepage route */}
      <Route path="/menu" element={<Menu />} /> {/* Menu route */}
    </Routes>
  </BrowserRouter>
);
