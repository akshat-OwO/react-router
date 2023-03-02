import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';

// pages
import About from './pages/About';
import Home from './pages/Home';

// layout imports
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
