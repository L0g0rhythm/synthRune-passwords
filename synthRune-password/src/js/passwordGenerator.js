import { getRandomCryptoNumber } from './utils.js';

function generateSegment(length, characters) {
    let segment = '';
    const charactersLength = characters.length;
    if (charactersLength === 0) {
        console.error("Character set cannot be empty for segment generation.");
        return '';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomCryptoNumber(charactersLength);
        segment += characters.charAt(randomIndex);
    }
    return segment;
}

export function generateAppleStylePassword() {
    const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const segmentLength = 6;

    const segment1 = generateSegment(segmentLength, alphanumericChars);
    const segment2 = generateSegment(segmentLength, alphanumericChars);
    const segment3 = generateSegment(segmentLength, alphanumericChars);

    return `${segment1}-${segment2}-${segment3}`;
}