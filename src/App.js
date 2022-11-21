import './App.css';
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Munja from './routes/Munja';
import Dowon from './routes/Dowon';
import Entrance from './routes/Entrance';

function App() {

  

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/munja' element={<Munja />} />
                    <Route path='/dowon' element={<Dowon />} />
                    <Route path='/entrance' element={<Entrance />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
