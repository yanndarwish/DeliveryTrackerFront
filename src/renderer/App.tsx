import { RouterProvider } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import router from './router/router';

export default function App() {
  return <RouterProvider router={router} />;
}
