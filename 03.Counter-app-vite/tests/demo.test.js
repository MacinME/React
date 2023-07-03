
describe('Test on <Demo /> component', () => {
    test('It will not fail', () => { 

        // 1. Initialization
        const message1 = 'Hello World  '.trim();
    
        // 2. Estimulate
        const message2 = message1.trim();
    
        // 3. Look at behavior
        expect( message1 ).toBe( message2 );
     })
})