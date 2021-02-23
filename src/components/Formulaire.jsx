const Formulaire = () => {
  return (
    <div className="formulaire">
      <form>
        <label htmlFor="titre"></label>
        <input
          type="text"
          name="titre"
          id="titre"
          placeholder="Titre de votre post"
        />
        <label htmlFor="contenu"></label>
        <textarea
          name="contenu"
          id="contenu"
          cols="30"
          rows="15"
          placeholder="Votre contenu ici"
        ></textarea>
        <label htmlFor="hashtags"></label>
        <textarea
          name="hashtags"
          id="hashtags"
          cols="30"
          rows="5"
          placeholder="Vos hashtags"
        ></textarea>
        <input type="button" value="Publication" id="bouton" />
      </form>
    </div>
  );
};

export default Formulaire;
