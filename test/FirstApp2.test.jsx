import { render,screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('pruebas en <FirstApp />', () => {

    const titulo = "Hola soy goku";
    const subtitulo = "Soy un subtitulo";
    
    test('debe de hacer match con el snahpshot', () => {
        
        const {container} = render(<FirstApp title={titulo} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje "Hola soy Goku"', () => {

        render(<FirstApp title={titulo} />);
        expect( screen.getByText(titulo) ).toBeTruthy();

    });

    test('Debe de mostrar el titulo en un h1', () => {

        render(<FirstApp title={titulo} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(titulo);
      
    });
    
    test('Debe de mostrar el subtitulo enviado por props', () => {

        render(
          <FirstApp title={titulo} subTitle={subtitulo} />
        );

        expect(screen.getAllByText(subtitulo).length).toBe(2);
    });
});