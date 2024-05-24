import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ isLoggedIn, children }: { isLoggedIn: boolean, children: JSX.Element }) {
    return isLoggedIn ? children : <Navigate to="/" />;
}
