import { useEffect, useState } from "react";
import "./Home.css";
import blogFetch from "../../axios/config";
import { Link } from "react-router-dom";

const Home = () => {
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

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="home">
      <h2>Home</h2>
      <h1>Ultimos posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((posts) => (
          <div className="post" key={posts.id}>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
            <Link to={`/posts/${posts.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
