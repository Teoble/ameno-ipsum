import { randomWord, randomInteger } from '../../helper/RandomHelper';

describe('Random Word', () => {
    test('It should return a random word', () => expect(randomWord()).not.toBeNull());
});

describe('Random Integer', () => {
    test('It should return a random number',
             () => {
                 const randomNumber: number = randomInteger(1, 15);
                 expect(randomNumber).toBeGreaterThanOrEqual(1);
                 expect(randomNumber).toBeLessThanOrEqual(15);
             }
    );
});