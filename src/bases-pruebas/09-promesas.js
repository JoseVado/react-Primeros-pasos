import {getHeroeById} from './08-imp-exp'


export const getHeroeByIdAsync = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const x = getHeroeById(id);

            if (x) {
                resolve(x);
            } else {
                reject('No se pudo encontrar el heroe '+id);
            }
        }, 1000)
    });
};

