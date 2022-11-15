const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 1214123,
        lat: 1.31245134,
        lng: 32.14513451,
    }
};

console.log( persona );
//console.table(persona);

//Esto no se hace, solo se pasa direccion en memoria
const persona2 = persona;
persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona);

const persona3 = { ...persona };
console.log(persona3);