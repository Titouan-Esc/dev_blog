import React, { useState, useEffect } from "react";
import axios from "axios";

const Formulaire = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState([]);

  function uploadData() {
    const postUrl = "http://localhost:5000/api/v1/posts";
    axios.post(postUrl, post).then(function (response) {
      console.log(response);
    });
  }

  useEffect(() => {
    console.log(post);
    uploadData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setPost({
      ...{ title },
      ...{ content },
      ...{ tags },
    });
    console.log(post);
  };

  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit}>
        {/* Titre du poste */}
        <label htmlFor="titre">Titre du post :</label>
        <input
          type="text"
          name="titre"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Contenu du post */}
        <label htmlFor="contenu">Contenu :</label>
        <textarea
          name="contenu"
          id="content"
          cols="30"
          rows="15"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {/* Tags du post */}
        <label htmlFor="tags">Tags/Catégories</label>
        <input
          type="text"
          name="tags"
          id="tags"
          value={tags}
          onChange={(e) => {
            let newTags = e.target.value.toLowerCase().split(",");
            setTags(newTags);
          }}
        />
        {/* Bouton input */}
        <input type="submit" value="Créer son post" id="bouton" />
      </form>
    </div>
  );
};

export default Formulaire;
