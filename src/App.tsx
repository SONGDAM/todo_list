import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Join from './components/Join';
import Login from './components/Login';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/join' element={<Join />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
