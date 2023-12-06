import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './features/auth/Login';
import Document from './features/document/Document';
import TableStudent from './features/user/TableStudent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<TableStudent />} />
        <Route path='login' element={<Login />} />
        <Route path='document' element={<Document />} />
      </Route>
    </Routes>
  );
}

export default App;
