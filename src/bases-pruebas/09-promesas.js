import {getHeroeById} from './bases/08-imp-exp'

//const promesa = new Promise((resolve,reject) => {
//    setTimeout(() => {
        //console.log('2 segundos después');
        //resolve();

//        const x = getHeroeById(2);
//        resolve(x);
        //reject('No se pudo encontrar el heroe');
//    }, 2000)
//});

//promesa.then((heroe) => {
//    console.log('Heroe', heroe);
//})
//    .catch(err => console.log(err));

const getHeroeByIdAsync = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log('2 segundos después');
            //resolve();

            const x = getHeroeById(id);

            if (x) {
                resolve(x);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000)
    });
};

getHeroeByIdAsync(1)
    //.then(heroe => console.log('Heroe', heroe))
    //.catch(err => console.warn(err));
    .then( console.log )
    .catch( console.warn );

