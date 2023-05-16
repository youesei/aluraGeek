import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { AppRoutes } from '../app/routes/AppRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <AppRoutes/> } />
        <Route path="auth/*" element={ <AuthRoutes/> } />
        {/* <Route path="/*" element={ <Navigate to='/auth/login' /> } /> */}
    </Routes>
  )
}
