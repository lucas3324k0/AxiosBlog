import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import blogFetch from "../../axios/config";

const Admin = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    console.log("Testando...");

    try {
      const response = await blogFetch.get("/posts");

      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };


  const deletePost = async (id) => {
    await blogFetch.delete(`/posts/${id}`)

    const filteredPost = posts.filter((post) => post.id !== id)

    setPosts(filteredPost)
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="admin">
      <h1>Gerenciar posts</h1>
      {posts.length === 0 ? (
        <p>carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="posts" key={post.id}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link className="btn edit-btn" to={`/posts/edit/${post.id}`}>Editar</Link>
              <button className="btn delete-btn" onClick={() => deletePost(post.id)}>Excluir</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
