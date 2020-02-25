import { randomWord, randomInteger } from '../helper/RandomHelper';
import capitalizeFirstLetter from '../helper/CapitalizeHelper';

class AmenoIpsum {

    constructor(
        public minWordsPerSentence: number = 3,
        public maxWordsPerSentence: number = 10,
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
        if(quantity){
            for(let index=0;index < quantity; index++)
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
        if(quantity){
            for(let index=0;index < quantity; index++)
                sentences = `${ this.generateWords(randomInteger(this.minWordsPerSentence, this.maxWordsPerSentence)) }. ${ sentences }`;
            return sentences.trim();
        }
        else
            return '';
    }
}

export default AmenoIpsum;
