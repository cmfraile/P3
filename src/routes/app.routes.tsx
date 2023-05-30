import { Routes , Route , Navigate, BrowserRouter } from 'react-router-dom';
import App from '../components/App.component';
import { mainProvider as MP } from '../context/main.context';

export const AppRouter = () => 
    <MP>
        <BrowserRouter>
            <Routes>
                <Route path='' element={ <App/> }/>
                <Route path="*" element={ <Navigate to=''/> } />
            </Routes>
        </BrowserRouter>
    </MP>