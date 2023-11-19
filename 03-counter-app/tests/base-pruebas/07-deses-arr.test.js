import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    
    test('retornaArreglo debe de retornar un string y un array', () => { 
        const [ letters, numbers] = retornaArreglo()

        //console.log(letters)

        //Se evalua también el tipo
        expect( letters ).toBe( 'ABC' )
        expect( numbers ).toBe( 123 )

     })
 })