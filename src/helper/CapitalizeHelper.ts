/**
 *  Method that receives a text and returns with the firts letter capitalized
 * @param text  string: Text to be capitalized
 * @returns     string: Capitalized text
 */

const capitalizeFirstLetter = (text: string): string => {
    const trimText = text.trim();
    return trimText.charAt(0).toUpperCase() + trimText.slice(1);
};

export default capitalizeFirstLetter;