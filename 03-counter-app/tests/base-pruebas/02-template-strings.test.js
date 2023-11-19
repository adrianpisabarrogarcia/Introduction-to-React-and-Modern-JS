import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Pruebas en 02-template-strings', () => {

    test('getSaludo debe retornar "Hola Adrián" ', () => { 
        const name = 'Adrián'
        const message = getSaludo(name)


        expect(message).toStrictEqual(`Hola ${ name }`)
     })
    
    
})