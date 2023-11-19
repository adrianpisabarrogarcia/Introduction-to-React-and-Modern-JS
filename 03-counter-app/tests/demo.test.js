describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe de fallar 1', () => { 
        if ( 1 === 0){
            // 1. Inicialización
            const message1 = 'Hola mundo'

            // 2. Estímulo
            const message2 = message1.trim()

            // 3. Observar el comportamiento... esperado
            expect( message1 ).toBe( message2 )

            //Docuemntation REF: https://jestjs.io/es-ES/docs/api
            //throw new Error('No se puede dividir entre 0')
        }
    })

    test('Esta prueba no debe de fallar 2', () => { 
        if ( 1 === 0){
            // 1. Inicialización
            const message1 = 'Hola mundo'

            // 2. Estímulo
            const message2 = message1.trim()

            // 3. Observar el comportamiento... esperado
            expect( message1 ).toBe( message2 )

            //Docuemntation REF: https://jestjs.io/es-ES/docs/api
            //throw new Error('No se puede dividir entre 0')
        }
    })
})

