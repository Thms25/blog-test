import React, { Component } from 'react'
import { useNavigate, useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
  const handleDelete = () => {
    console.log('lets delete it')

    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    })
  };

  return (
    <div className="blog">
      { isPending && <h1>Loading...</h1> }
      { error && <h1>{ error }</h1> }
      { blog && (
        <article>
          <h2> { blog.title } </h2>
          <p> Written by { blog.author } </p>
          <div className='blog-body'>
            { blog.body }
          </div>
          <div>
            <button onClick={handleDelete}>Delete Blog</button>
          </div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
