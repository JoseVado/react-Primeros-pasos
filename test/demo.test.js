
describe('Pruebas en <DemoComponent />', () => {
    test('esta prueba no debe de fallar', () => {

        // inicializacion
        const message1 = "Hola mundo";

        // estimulo
        const message2 = message1.trim();

        //observar el comportamiento esperado
        expect(message1).toBe(message2);

    });
});

