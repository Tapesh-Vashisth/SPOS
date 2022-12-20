import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import LazyFallBack from './components/LazyFallBack';
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback = {<LazyFallBack />}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
