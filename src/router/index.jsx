import React, { Fragment, createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CommonComponent from "../components/ui/CommonComponent";
import Home from "../components/Home";
import CategoriaPage from "../components/CategoriaPage"
import PosterPage from "../components/PosterPage";
import SearchPage from "../components/SearchPage";

export const Quantity = createContext()
export const categories = [
    {
      id: 1,
      path:'/Editorial',
      title: "Editorial",
    },
    {
      id: 2,
      path:'/Following',
      title: "Following",
    },
    {
      id: 3,
      path:'/Unsplash+',
      title: "Unsplash+",
    },
    {
      id: 4,
      path:'/The Holidays',
      title: "The Holidays",
    },
    {
      id: 5,
       path:'/Wallpapers',
      title: "Wallpapers",
    },
    {
      id: 6,
       path:'/3D Renders',
      title: "3D Renders",
    },
    {
      id: 7,
       path:'/Nature',
      title: "Nature",
    },
    {
      id: 8,
       path:'/Architecture & Interiors',
      title: "Architecture & Interiors",
    },
    {
      id: 9,
       path:'/Experimental',
      title: "Experimental",
    },
  
    {
      id: 10,
       path:'/Textures & Patterns',
      title: "Textures & Patterns",
    },
    {
      id: 11,
       path:'/Film',
      title: "Film",
    },
    {
      id: 12,
       path:'/Animals',
      title: "Animals",
    },
    {
      id: 13,
       path:'/Street Photography',
      title: "Street Photography",
    },
    {
      id: 14,
       path:'/Food & Drink',
      title: "Food & Drink",
    },
    {
      id: 15,
       path:'/Travel',
      title: "Travel",
    },
    {
      id: 16,
       path:'/Fashion & Beauty',
      title: "Fashion & Beauty",
    },
    {
      id: 17,
       path:'/People',
      title: "People",
    },
    {
      id: 18,
       path:'/Health & Wellness',
      title: "Health & Wellness",
    },
    {
      id: 19,
       path:'/Sports',
      title: "Sports",
    },
    {
      id: 20,
       path:'/Spirituality',
      title: "Spirituality",
    },
    {
      id: 21,
       path:'/Current Events',
      title: "Current Events",
    },
    {
      id: 22,
       path:'/Business & Work',
      title: "Business & Work",
    },
  ];

function Layout() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Quantity.Provider value={[showSearch, setShowSearch]}>
    <Routes forceRefresh>
      <Route path="/" element={<CommonComponent/>}>
        <Route index element={<Home title={'Editorial'}/>} />
        <Route path='/Editorial' element={<Home title={'Editorial'}/>} />
        {categories.map((link) => (
          <Fragment key={link.id}>
            <Route
              path={link.path}
              element={<CategoriaPage queryValue={link.title} />}
            />
          </Fragment>
        ))}
           <Route path="/:photoId" element={<PosterPage/>} />
           <Route path="/search" element={<SearchPage/>} />
      </Route>
    </Routes>
    </Quantity.Provider>
  );
}

export default Layout;
