import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    
    //tareas: getHeroeById
    test('getHeroeById debe retornar un héroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById( id );

        const expectHerro = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }

        expect( hero ).toEqual(expectHerro);
     })

     test('getHeroeById debe retornar undefined si no existe ', () => { 
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBe( undefined )
        expect( hero ).toBeFalsy();
     })

     //tareas: getHeroesByOwner
     test('debe retornas un array con los héroes de DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
     })

     test('debe retornas un array con los héroes de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
     })

 })