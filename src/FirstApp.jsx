const newMesage = {
    mesage: 'Hola Mundo',
    title: 'Vado',
};

const mensaje = () => 'Es el retorno de una función';

export const FirstApp = () => {

    return (
        <>
            <h1>{ mensaje() }</h1>
            {/*<h1>{ JSON.stringify( newMesage )}</h1>*/}
            <p>Soy un subtitulo</p>
      </>
  )
}
