import { useEffect } from "react";
import "./Modal.css";
const InfoModal = ({ CloseModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <div className="modal-wrapper" onClick={CloseModal}></div>
      <div className="modal-container">
        <p>
          Lorem Ipsum è un testo segnaposto utilizzato nel settore della
          tipografia e della stampa. Lorem Ipsum è considerato il testo
          segnaposto standard sin dal sedicesimo secolo, quando un anonimo
          tipografo prese una cassetta di caratteri e li assemblò per preparare
          un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
          anche al passaggio alla videoimpaginazione, pervenendoci
          sostanzialmente inalterato. Fu reso popolare, negli anni ’60
        </p>
        <button className="btn" onClick={CloseModal}>
          hideModel
        </button>
      </div>
    </>
  );
};
export default InfoModal;
