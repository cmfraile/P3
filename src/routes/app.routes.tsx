import { Routes , Route , Navigate, BrowserRouter } from 'react-router-dom';
import App from '../components/App.component';

export const AppRouter = () => 
    <BrowserRouter>
        <Routes>
            <Route path='' element={ <App/> }/>
            <Route path="*" element={ <Navigate to=''/> } />
        </Routes>
    </BrowserRouter>