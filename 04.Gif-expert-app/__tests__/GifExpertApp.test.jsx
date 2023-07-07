import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Test on <GifExpertApp />', () => { 

    test('Should return a GifExpertApp title within a h1 tag', () => {
        const title = "GifExpertApp";

        render(
            <GifExpertApp />
        );
        
        expect( screen.getAllByRole('heading', { level: 1} )[0].innerHTML ).toBe( title );

        screen.debug();
    })
})