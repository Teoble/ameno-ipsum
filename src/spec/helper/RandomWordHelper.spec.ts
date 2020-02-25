import randomWord from '../../helper/RandomWordHelper';

describe('Random Word', () => {
    test('It should return a rand word', () => expect(randomWord()).not.toBeNull());
});