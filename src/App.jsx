import React from 'react'

import { ForumProvider } from './contexts/ForumContext'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ForumsPage from './pages/ForumsPage'
import MainLayout from './layouts/MainLayout'
import CreateNewForum from './pages/CreateNewForum'
import ForumPage from './pages/ForumPage'



const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/:topic' element={<ForumsPage />} />
        <Route path='/forum/:id' element={<ForumPage />}  />
      

        <Route path='/createNewForum' element={<CreateNewForum />} />
      </Route>
    )
  );




  return (
    <ForumProvider>
      <RouterProvider router={router} />
    </ForumProvider>
  );
}

export default App