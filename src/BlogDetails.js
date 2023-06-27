import React, { Component } from 'react'
import { useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)

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
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
