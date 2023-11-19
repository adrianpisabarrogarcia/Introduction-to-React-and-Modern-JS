import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj6', () => {
    
    test('usContext debe de retornar un objeto', () => { 
        const testUserContext = () => ({
            nombreClave: 'Adrian',
            anios: 23,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

        const userContext = usContext(testUserContext().nombreClave, null, testUserContext().anios)

        expect( testUserContext() ).toEqual( userContext )
     })




 })