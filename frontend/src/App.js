import { BrowserRouter } from 'react-router-dom';
import "../src/App.css"
import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <AllRoutes />
    </BrowserRouter>
    </>
  );
}

export default App;
