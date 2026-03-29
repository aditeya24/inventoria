import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Import all the pages we have built so far
import { HomePage } from './HomePage/HomePage'
import { LoginPage } from './LoginPage/LoginPage'
import { RegisterPage } from './RegisterPage/RegisterPage'
import { GetOTP } from './GetOTP/GetOTP'
import { PasswordReset } from './PasswordReset/PasswordReset'
import { ItemDetailPage } from './ItemDetailPage/ItemDetailPage'
import { ProfilePage} from './ProfilePage/ProfilePage';

// Define the route paths and which component they render
const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/get-otp', element: <GetOTP /> },
    { path: '/reset-password', element: <PasswordReset /> },
    { path: '/item/:id', element: <ItemDetailPage /> }, // The :id is a dynamic parameter!
    { path: '/profile', element: <ProfilePage /> }
]);

const rootElement = document.getElementById('root')

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            {/* The RouterProvider replaces the single hard-coded page */}
            <RouterProvider router={router} />
        </StrictMode>
    )
}