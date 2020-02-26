import { randomWord, randomInteger } from '../helper/RandomHelper';
import capitalizeFirstLetter from '../helper/CapitalizeHelper';

class AmenoIpsum {

    constructor(
        private textFormat: 'plain' | 'html' = 'plain',
        private minWordsPerSentence: number = 3,
        private maxWordsPerSentence: number = 10,
        private minSentencesPerParagraph: number = 3,
        private maxSentencesPerParagraph: number = 7
    ) {
    }

    /**
     * Returns the quantity of the words from Ameno lyrics
     * @param quantity number: Quantity of words
     * @returns        string: return a sentence with the quantity of words passed
     *
     */
    public generateWords(quantity: number): string {
        let words: string = '';
        quantity = Math.abs(quantity);
        if (quantity) {
            for (let index = 0; index < quantity; index++)
                words = `${ randomWord() } ${ words }`;
            return capitalizeFirstLetter(words).trim();
        }
        else
            return '';
    }

    /**
     * Returns the quantity of the sentences from Ameno lyrics
     * @param quantity number: Quantity of sentences
     * @returns        string: return sentences based on the quantity passed
     *
     */
    public generateSentences(quantity: number): string {
        let sentences: string = '';
        quantity = Math.abs(quantity);
        if (quantity) {
            for (let index = 0; index < quantity; index++)
                sentences = `${ this.generateWords(randomInteger(this.minWordsPerSentence, this.maxWordsPerSentence)) }. ${ sentences }`;
            return sentences.trim();
        }
        else
            return '';
    }

    /**
     * Returns the quantity of the paragraphs from Ameno lyrics
     * @param quantity number: Quantity of paragraphs
     * @returns        string: return paragraphs based on the quantity passed
     *
     */
    public generateParagraphs(quantity: number): string {
        let paragraphs: string = '';
        let paragraph: string;
        quantity = Math.abs(quantity);
        if (quantity) {
            for (let index = 0; index < quantity; index++) {
                paragraph = this.paragraphFormat(this.generateSentences(randomInteger(this.minSentencesPerParagraph, this.maxSentencesPerParagraph)));
                paragraphs = `${ paragraph }${ paragraphs }`;
            }
            return paragraphs.trim();
        }
        else
            return '';
    }

    private paragraphFormat(paragraph: string): string {
        return this.textFormat === 'html' ? `<p>${paragraph}</p>` : `${paragraph}\r\n`;
    }
}

export default AmenoIpsum;
