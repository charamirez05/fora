import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ForumsPage from "./pages/ForumsPage";
import MainLayout from "./layouts/MainLayout";
import CreateNewForum from "./pages/CreateNewForum";
import ForumPage from "./pages/ForumPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/forums/:topic" element={<ForumsPage />} />
        <Route path="/forum/:id" element={<ForumPage />} />
        <Route path="/search/:title" element={<SearchResultsPage />} />
        <Route path="/create-forum" element={<CreateNewForum />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
