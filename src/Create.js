import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('Thomas');
const [isPending, setIsPending] = useState(false);
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  const blog = { title, body, author };

  setIsPending(true)
  fetch("http://localhost:8000/blogs", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog)
  }).then(() => {
    console.log("new blog added");
    setIsPending(false)
    navigate("/");
  });
};

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h2>Add a new blog</h2>
        <label htmlFor="">Blog Titlw</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        <label htmlFor="">Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Author</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Thomas">Thomas</option>
          <option value="Lalie">Lalie</option>
          <option value="Unknown">Unknown</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}

export default Create;
