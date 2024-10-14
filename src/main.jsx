
import './index.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements  } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Github from './components/github/Github.jsx'
import githubInfoLoader from './components/github/githubLoader.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact/>}/>
      <Route path='github' element={<Github/>} loader={githubInfoLoader} />
  
     
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)