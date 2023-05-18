import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";


import Home from './components/Home';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/:input" element = {<Results/>}/>
          <Route path="/:zinput/:color/:backgroundColor"  element = {<Results/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
