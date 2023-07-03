import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test on 11-async-await', () => { 

    test('getImagen must return the image URL', async() => {
        const url = await getImagen();
        
        expect( typeof url).toBe('string');
        console.log(url)
    });
 })