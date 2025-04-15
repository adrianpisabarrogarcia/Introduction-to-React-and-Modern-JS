import { getImagen } from '../../src/base-pruebas/11-async-await';


jest.setTimeout(10000); // ⬅️ esto permite más tiempo para que termine


describe('Pruebas en 11-async-await.js', () => { 
    // test('getImagen debe de retornar un  URL de la imagen', async() => { 
    //     const url = await getImagen();
    //     expect( typeof url ).toBe('string');
    //  })

     test('getImagen debe de retornar un error si no tenemos api key', async() => { 
        const url = await getImagen();
        expect( url ).toBe('No se encontró la imagen');
     })
 })