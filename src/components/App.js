import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import SerieDetail from './SerieDetail';





const App = () => {
    return (
        <RouterProvider router={createBrowserRouter([
            {
                path:'/',
                element: <Layout/>,
                children:[{
                    index:true,
                    element: <Navigate to="/series" replace/>
                },{
                    path:'series',
                    element: <Home/>,
                    children:[{
                        path:':idseries',
                        element: <SerieDetail/>
                    }]
                }]
            }, {
                path:'*',
                element: <Navigate to="/series" replace/>
            }]
        )}/>
    )
};
export default App;