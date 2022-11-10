import PropTypes from 'prop-types';


/*const newMesage = {
  mesage: "Hola Mundo",
  title: "Vado",
};

const mensaje = () => "Es el retorno de una función";
*/


export const FirstApp = ({ title, subTitle }) => {
    
    /*if (!title) {
        throw new Error('El title no existe');
    }*/

  return (
    <>
      <h1> {title} </h1>
      {/*<h1>{ JSON.stringify( newMesage )}</h1>*/}
      <p> {subTitle} </p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
}
