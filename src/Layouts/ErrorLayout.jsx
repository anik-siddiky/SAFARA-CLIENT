import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const ErrorLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default ErrorLayout;