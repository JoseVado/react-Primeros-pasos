

const context = ({clave, nombre, edad, rango = 'Capitan'}) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.123412,
            lng: -52.342542,
        }
    }
}
