import { renderHook, screen, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test on useFetchGifs Hook', () => { 
    test('Should return the initial state', () => {
        
        const { result } = renderHook( () => useFetchGifs('One Punch Man'));

        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('should return an array of images and isLoading false', async() => { 
        
        const { result } = renderHook( () => useFetchGifs('One Punch Man'));

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    })
})