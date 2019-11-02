const converter = require('./converter.js')

    test('Input 0THB equal 0.00USD', () => {
        expect(converter(0)).toEqual('$0.00')
    });

    test('Input 1THB equal 0.03USD', () => {
        expect(converter(1)).toEqual('$0.03')
    });

    test('Input 10THB equal 0.3USD', () => {
        expect(converter(10)).toEqual('$0.33')
    });

    test('Input 100THB equal 3USD', () => {
        expect(converter(100)).toEqual('$3.30')
    });

    test('Input 1000THB equal 30USD', () => {
        expect(converter(1000)).toEqual('$33.00')
    });
    
    test('Error process! Enter input to string cannot be process', () => {
        expect(converter("String")).toEqual("Error")
    });
    //Bussakorn Saetiew 5735512033
