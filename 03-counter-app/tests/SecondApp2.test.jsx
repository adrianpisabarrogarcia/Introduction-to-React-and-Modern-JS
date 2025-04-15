import { render, screen } from "@testing-library/react";
import { SecondApp } from "../src/SecondApp"

describe('Pruebas en <SecondApp />', () => {

    const subTitle = 'Hola, Amaia!!'
    const passNumber = 4

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<SecondApp subtitle={subTitle} passNumber={passNumber} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el mensaje "Hola, Amaia!!"', () => {

        const { getAllByText } = render(<SecondApp subtitle={subTitle} passNumber={passNumber} />)
        //screen.debug()  // <- Muestra el HTML de la pantalla
        const subtitleElements = getAllByText(subTitle);
        expect(subtitleElements.length).toBe(2); // We expect exactly 2 elements with the subtitle
        expect(subtitleElements[0]).toBeTruthy();  // Check if at least one is found
        expect(subtitleElements[1]).toBeTruthy();  // Check the second occurrence
        expect(screen.getByText(passNumber)).toBeTruthy();
    })

    test('Debe de mostrar el titulo en un h3', () => {
        render(<SecondApp subtitle={subTitle} passNumber={passNumber} />);
        const headingElements = screen.getAllByRole('heading', { level: 3 });
        
        // Check if one of the h3 elements contains the subtitle
        const titleElement = headingElements.find((el) => el.innerHTML.includes(subTitle));
        expect(titleElement).toBeTruthy();
        expect(titleElement.innerHTML).toContain(subTitle);
    })

    test('Debe mosrtar el subtitulo enviado por props', () => { 
        render(<SecondApp subtitle={subTitle} passNumber={passNumber} />)
        expect(screen.getAllByText(subTitle).length).toBe(2);
    })
})