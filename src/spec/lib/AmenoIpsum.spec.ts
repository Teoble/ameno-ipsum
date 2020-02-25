import AmenoIpsum from '../../lib/AmenoIpsum';

describe('Ameno Ipsum', () => {
    const ameno = new AmenoIpsum();
    test('generate one word', () => {
        expect(ameno.generateWords(1).split(' ')).toHaveLength(1);
    });

    test('it can not generate negative word', () => {
        expect(ameno.generateWords(-1).split(' ')).toHaveLength(1);
    });

    test('it returns empty string if quantity is 0', () => {
        expect(ameno.generateWords(0)).toBe('');
    });

    test('generate multiple words', () => {
        expect(ameno.generateWords(3).split(' ')).toHaveLength(3);
    });
});