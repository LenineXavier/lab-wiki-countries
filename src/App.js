import 'bootstrap/dist/css/bootstrap.css';
import { Home } from "./Pages/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <BrowserRouter>
       
       <Routes>
      <Route path="/" element={<Home/>} />
  </Routes>
       
       </BrowserRouter>
      

      </header>
    </div>
  );
}

export default App;
