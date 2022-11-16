import { fireEvent, render,screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('pruebas en <CounetApp />', () => {

    const initialValue = 100;

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={initialValue} />);
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(initialValue.toString());
    });

    test('Debe de incrementar con el botón +1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain((initialValue+1).toString());
    });

    test('Debe de decrementar con el botón -1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain((initialValue - 1).toString());
    });

    test('Debe de funcionar el boton de reset', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));

        //fireEvent.click(screen.getByText('Reset'));

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(initialValue.toString());

    });


});