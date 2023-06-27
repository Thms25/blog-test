import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { Route, Routes } from 'react-router';
import React from 'react';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <div className="app">
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </div>
    </div>
  )
};

export default App;
