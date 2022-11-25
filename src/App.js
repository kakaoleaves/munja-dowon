import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Munja from './routes/Munja';
import Dowon from './routes/Dowon';
import Entrance from './routes/Entrance';


const router = createBrowserRouter([{
    basename: process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '',
    path: process.env.NODE_ENV === 'production' ? 'munja-dowon' : '',
    element: <Layout />,
    children: [{
        path: "home",
        element: <Home />
    },
    {
        path: "munja",
        element: <Munja />
    },
    {
        path: "dowon",
        element: <Dowon />
    },
    {
        path: "entrance",
        element: <Entrance />
    }]
  }])
  
function App() {
    return (<RouterProvider router={router} />);
}

export default App;
