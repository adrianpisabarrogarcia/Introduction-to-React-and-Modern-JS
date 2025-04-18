import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornas un héroe', ( done ) => { 
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toEqual( 
                    { id: 1, name: 'Batman', owner: 'DC' }
                );
                done();
            })
     })

     test('getHeroeByIdAsync debe retornar un error si heroe no existe', ( done ) => { 
        const id = 100;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBeFalsy();
                done();
            })
            .catch( err => {
                expect( err ).toBe('No se pudo encontrar el héroe');
                done();
            })
     })
});
