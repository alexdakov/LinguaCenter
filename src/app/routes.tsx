import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Languages from './pages/Languages';
import About from './pages/About';
import Contact from './pages/Contact';

export function createRouter(language: string, setLanguage: (lang: string) => void) {
  return createBrowserRouter([
    {
      path: '/',
      element: <Layout language={language} setLanguage={setLanguage} />,
      children: [
        { index: true, element: <Home language={language} /> },
        { path: 'languages', element: <Languages language={language} /> },
        { path: 'about', element: <About language={language} /> },
        { path: 'contact', element: <Contact language={language} /> },
      ],
    },
  ]);
}
