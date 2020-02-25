import { WORDS } from '../constants/words';

const randomWord = (): string =>  {
    const min = 0;
    const max = WORDS.length - 1;
    return WORDS[randomInteger(min, max)];
}

/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
const randomInteger = (min:number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

export default randomWord;