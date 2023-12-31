import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from 'react';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      { error && <div><h1>{ error }</h1></div> }
      { isPending && <div><h1>loading blogs...</h1></div> }
      { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
    </div>
   );
}

export default Home;
