import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
    return ( 
        <div className="body">
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout