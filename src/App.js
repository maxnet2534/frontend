import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './features/auth/Login';
import R01 from './features/document/R01';
import R11 from './features/document/R11';
import R16 from './features/document/R16';
import R17 from './features/document/R17';
import R23 from './features/document/R23';
import TableStudent from './features/user/TableStudent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<TableStudent />} />
        <Route path='login' element={<Login />} />
        <Route path='r01' element={<R01 />} />
        <Route path='r11' element={<R11 />} />
        <Route path='r16' element={<R16 />} />
        <Route path='r17' element={<R17 />} />
        <Route path='r23' element={<R23 />} />
      </Route>
    </Routes>
  );
}

export default App;
