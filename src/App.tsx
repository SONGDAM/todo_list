import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Join from './components/Join';
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
