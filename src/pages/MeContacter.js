import emailjs from "emailjs-com";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MeContacter = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [mail, setMail] = useState("");
  const [submit, setSubmit] = useState(false);

  //   ! Correspond au service ID dans email service dans EmailJs
  const serviceId = "service_9ha5rug";
  const templateId = "template_hmypu1g";
  //   ! Correspond à l'onglet intégration d' Emailjs et en utilisant User ID
  const mailer = emailjs.init("user_0j85u3NARvFPIO7aQnUqn");
  const isInitialMount = useRef(true);

  const sendMail = async () => {
    try {
      const sentMail = await emailjs.send(serviceId, templateId, mail);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setMail({
      ...{ name },
      ...{ mail },
      ...{ content },
    });
    console.log(mail);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log(mail);
      mail && sendMail();
    }
  }, [submit]);

  if (submit) {
    return (
      <>
        <div>Votre message à était envoyé</div>
        <Link to="/">Retour aux posts</Link>
      </>
    );
  } else {
    return (
      <main>
        <div className="formulaire">
          <form onSubmit={handleSubmit}>
            <label htmlFor="titre">Prénom</label>
            <input
              type="text"
              name="titre"
              id="title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />

            <label htmlFor="contenu">Contenu :</label>
            <textarea
              name="contenu"
              id="content"
              cols="30"
              rows="15"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input type="submit" value="Envoyer le message" id="bouton" />
          </form>
        </div>
      </main>
    );
  }
};

export default MeContacter;
