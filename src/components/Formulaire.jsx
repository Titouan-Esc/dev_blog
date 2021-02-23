import React, { useState } from "react";

const Formulaire = () => {
  const handleChange = (e) => {
    e.preventDefault();
    setBouton(true);
    setPost(title, content, tags);
    console.log(post);
  };

  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [bouton, setBouton] = useState(false);

  return (
    <div className="formulaire">
      <form>
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
        <label htmlFor="hashtags">Tags/Catégories</label>
        <textarea
          name="hashtags"
          id="tags"
          cols="30"
          rows="5"
          value={tags}
          onChange={(e) => {
            let newTags = e.target.value.split(",");
            setTags(newTags);
          }}
        ></textarea>
        {/* Bouton input */}
        <input type="submit" value={bouton} id="bouton" />
      </form>
    </div>
  );
};

export default Formulaire;
