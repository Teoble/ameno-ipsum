import AmenoIpsum from '../../lib/AmenoIpsum';

describe('Ameno Ipsum', () => {
    describe('Words generation', () => {
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

    describe('Sentences generation', () => {
        const ameno = new AmenoIpsum();

        const countPeriod = (sentence: string): number => (sentence.match(/\./g) || []).length;

        test('generate one sentence', () => {
            expect(countPeriod(ameno.generateSentences(1))).toEqual(1);
        });

        test('generate empty sentence', () => {
            expect(countPeriod(ameno.generateSentences(0))).toEqual(0);
        });

        test('generate multiple sentences', () => {
            expect(countPeriod(ameno.generateSentences(3))).toEqual(3);
        });
    });
});