import { getUser, getUsuarioActivo } from "../../src/bases-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABCD213',
            username: 'El_Papi14'
        };

        const user = getUser();

        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const name = 'Vado';
        const testUser = {
            uid: 'ABD910',
            username: name,
        }

        const user = getUsuarioActivo(name);

        expect(testUser).toEqual(user);
    });
});