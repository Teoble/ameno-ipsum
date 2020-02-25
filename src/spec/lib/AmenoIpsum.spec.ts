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

    describe('Sentences paragraphs', () => {

        describe('Plain paragraph', () => {
            const ameno = new AmenoIpsum('plain');

            const countPlainParagraphs = (paragraph: string): number => {
                return (paragraph.match(/\r\n|\r|\n/g) || []).length
            };

            test('generate one paragraph', () => {
                expect(countPlainParagraphs(ameno.generateParagraphs(1))).toEqual(0);
            });

            test('generate empty paragraph', () => {
                expect(ameno.generateParagraphs(0)).toEqual('');
            });

            test('generate two paragraphs', () => {
                expect(countPlainParagraphs(ameno.generateParagraphs(2))).toEqual(1);
            });
        });

        describe('HTML paragraph', () => {
            const ameno = new AmenoIpsum('html');

            const countHtmlParagraphs = (paragraph: string): number => {
                return (paragraph.match(/<p[^>]*>/g) || []).length
            };

            test('generate one paragraph', () => {
                expect(countHtmlParagraphs(ameno.generateParagraphs(1))).toEqual(1);
            });

            test('generate empty paragraph', () => {
                expect(ameno.generateParagraphs(0)).toEqual('');
            });

            test('generate two paragraphs', () => {
                expect(countHtmlParagraphs(ameno.generateParagraphs(2))).toEqual(2);
            });
        });
    });
});