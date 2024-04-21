import { BrowserRouter } from 'react-router-dom';
import "../src/App.css"
import AllRoutes from './AllRoutes/AllRoutes';

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
