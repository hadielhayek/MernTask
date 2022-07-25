import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home/home';
import AddEdit from './views/addedit/addedit';
function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} exact />
    <Route path="/add" element={<AddEdit />} exact />
    <Route path="/edit/:id" element={< AddEdit />} exact />
    {/* <Route path="/post/:id" element={<Viewpost />} exact /> */}
    </Routes>
   

    </BrowserRouter>
  );
}

export default App;
