import capitalizeFirstLetter from '../../helper/CapitalizeHelper';

describe('Capitalize', () => {
    test('It should capitalize a word', () => {
        expect(capitalizeFirstLetter('hello')).toBe('Hello');
    });
    test('It should capitalize a sentence', () => {
        expect(capitalizeFirstLetter('how are you?')).toBe('How are you?');
    });
    test('It should not capitalize something already capitalized', () => {
        expect(capitalizeFirstLetter('I am good')).toBe('I am good');
        expect(capitalizeFirstLetter('OK')).toBe('OK');
    });
    test('It should returns empty if the parameter is the same',() => {
        expect(capitalizeFirstLetter('')).toBe('');
    });
});
