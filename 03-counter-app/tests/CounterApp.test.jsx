import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en <CounterApp />', () => {

    const initialValue = 10;

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el valor inicial sobre 100', () => {
        render(<CounterApp value={100} />)
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
    })

    test('Debe incrementar con el botón +1', () => {
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    })

    test('Debe decrementar el con el botón -1', () => { 
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
     })

    test('Debe de funcionar el botón de reset', () => { 
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
        fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
        fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText('10')).toBeTruthy();
     })
})