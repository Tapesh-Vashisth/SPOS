import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LazyFallBack from './components/LazyFallBack';
import Error404 from './pages/Error404';
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Project = React.lazy(() => import("./pages/Project"));
const Awards = React.lazy(() => import("./pages/Awards"));
const Policy = React.lazy(() => import("./pages/Policy"));
const AdminHome = React.lazy(() => import("./pages/AdminHome"));
const AddImages = React.lazy(() => import("./components/addImages"));
const SeeImages = React.lazy(() => import("./pages/SeeImages"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Layout />}>
          
          <Route path='lazy' element={<LazyFallBack />}/>

          <Route path='' element={<React.Suspense fallback = {<LazyFallBack />}>
            <Home />
          </React.Suspense>}></Route>

          <Route path='about' element={<React.Suspense fallback = {<LazyFallBack />}>
            <About />
          </React.Suspense>}></Route>

          <Route path='contact' element={<React.Suspense fallback = {<LazyFallBack />}>
            <Contact />
          </React.Suspense>}></Route>

          <Route path='projects' element={<React.Suspense fallback = {<LazyFallBack />}>
            <Projects />
          </React.Suspense>}></Route>

          <Route path='projects/:name' element={<React.Suspense fallback = {<LazyFallBack />}>
            <Project />
          </React.Suspense>}></Route>

          <Route path='awards' element={<React.Suspense fallback = {<LazyFallBack />}>
            <Awards />
          </React.Suspense>}></Route>

          <Route path='projects/:id' element={<React.Suspense fallback = {<LazyFallBack />}>
            <Project />
          </React.Suspense>}></Route>

          <Route path="privacypolicy" element={<React.Suspense fallback = {<LazyFallBack />}>
            <Policy />
          </React.Suspense>}></Route>

        </Route>

        <Route path = "/">
          <Route path="admin/seeImages" element={<React.Suspense fallback = {<LazyFallBack />}>
            <SeeImages />
          </React.Suspense>}></Route>

          <Route path="admin/images" element={<React.Suspense fallback = {<LazyFallBack />}>
            <AddImages />
          </React.Suspense>}></Route>

          <Route path="admin" element={<React.Suspense fallback = {<LazyFallBack />}>
            <AdminHome />
          </React.Suspense>}></Route>
        </Route>

        <Route path="/*" element={<React.Suspense fallback = {<LazyFallBack />}>
          <Error404 />
        </React.Suspense>}></Route>
      </Routes>
    </div>
  );
}

export default App;
