import { render } from "@testing-library/react";
import { SecondApp } from "../src/SecondApp"

describe('Pruebas en <SecondApp />', () => { 
    test('Debe de mostrar el subtitulo enviado por props', () => { 
        const subTitle = 'Hola, Amaia!!'
        const passNumber = 4
        const { getAllByText } = render(<SecondApp subtitle={ subTitle } passNumber={ passNumber } />)

        expect( getAllByText( subTitle ).length ).toBe(2);
        expect( getAllByText( passNumber ).length ).toBe(1);
    })
 })