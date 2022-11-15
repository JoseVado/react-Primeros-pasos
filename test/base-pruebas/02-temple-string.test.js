import { getSaludo } from "../../src/bases-pruebas/02-tempalte-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar "Hola Vado"', () => {
       
        const name = 'Vado';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);

    });
});
