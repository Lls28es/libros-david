import parse from 'html-react-parser';

const Lectura = ({ detail }) => {
  return (
    <div className="row">
      <div className="col-12 detailBook">
        <h2 className="titleBook text-center">{parse(`${detail.title}`)}</h2>
        <div className="readBook">{parse(`${detail.read}`)}</div>
        <div className="boxButtonsBook justify-content-center mb-4">
          <a className="buttonBuy" href="/">
            Volver
          </a>
          <button className="buttonMore">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Lectura;
