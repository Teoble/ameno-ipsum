import randomWord from '../helper/RandomWordHelper';
import capitalizeFirstLetter from '../helper/CapitalizeHelper';

class AmenoIpsum {
    /**
     * Returns the quantity of the words from Ameno lyrics
     * @param quantity number: Quantity of words
     * @returns        string: return a sentece with the quantity of words passed
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
}

export default AmenoIpsum;
