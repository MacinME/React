import { onFechAPI } from "../../src/helpers/getGifs"

describe('Test on getGifs', () => { 
    test('should return an arrays of gifs', async() => { 
        const gifs = await onFechAPI('One Punch');
        
        expect( gifs.length ).toBeGreaterThan(0);

        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            image: expect.any( String ) 
        })

    })
 })