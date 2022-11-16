import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('pruebas en <FirstApp />', () => {
    /*
    test('debe de hacer match con el snahpshot', () => {
        
        const titulo = 'Hola soy goku';
        const {container} = render(<FirstApp title={titulo} />);
        
        expect(container).toMatchSnapshot();

    });
    */
    test('Debe de mostrar el titulo en un h1', () => {

        const titulo = "Hola soy goku";
        const { container, getByText, getByTestId } = render(<FirstApp title={titulo} />);

        expect(getByText(titulo)).toBeTruthy();

        //const h1 = container.querySelector("h1");
        //expect(h1.innerHTML).toContain(titulo);

        expect(getByTestId("test-title").innerHTML).toContain(titulo);

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const titulo = "Hola soy goku";
        const subtitulo = 'Soy un subtitulo';
        const { getAllByText } = render(
          <FirstApp title={titulo} subTitle={subtitulo} />
        );

        expect(getAllByText(subtitulo).length).toBe(2);
    });
});