import { getHeroeById, getHeroesByOwner } from "../../src/bases-pruebas/08-imp-exp";


describe('Purebas en 08-imp-exp', () => {
   
    test('getHeroeById debe retornar un héroe por id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        console.log(hero);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });  
    });

    test('getHeroeById debe retornar undefined si no exite el id', () => {
        const id = 100;
        const hero = getHeroeById(id);

        console.log(hero);

        expect(hero).toBeFalsy(undefined);
    });

    test('getHeroesByOwner debe retornar 3 para los heroes de dc', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);


        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));
    });

    test('getHeroesByOwner debe retornar 2 para los heroes de marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));
    });



});
