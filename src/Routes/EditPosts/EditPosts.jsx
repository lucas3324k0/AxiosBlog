import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import blogFetch from "../../axios/config";

const EditPosts = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.put(`/posts/${id}`, {
      body: post,
    });
  };
  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);
      const data = response.data;
      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  });

  return (
    <div className="new-post">
      <h2>Editando {title} </h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Titulo: </label>
          <input
            type="text"
            name="title"
            placeholder="Digite o titulo"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>
        <div className="form-control">
          <label htmlFor="Body">Conteudo: </label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteudo"
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}
          ></textarea>
        </div>
        <input type="submit" value="Editar post" className="btn" />
      </form>
    </div>
  );
};

export default EditPosts;
