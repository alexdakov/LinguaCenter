import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { createRouter } from './routes';

export default function App() {
  const [language, setLanguage] = useState('en');
  const router = createRouter(language, setLanguage);

  return <RouterProvider router={router} />;
}
