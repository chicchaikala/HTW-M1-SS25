import { downTo } from './helpers';

export class Bottles {
    verse(verseNumber) {
        let bottlesText

        if (verseNumber === 0)
            bottlesText =
                `No more bottles of beer on the wall, no more bottles of beer.\n` +
                `Go to the store and buy some more, 99 bottles of beer on the wall.\n`

        if (verseNumber === 1)
            bottlesText =
                `${verseNumber} bottle of beer on the wall, ${verseNumber} bottle of beer.\n` +
                `Take it down and pass it around, no more bottles of beer on the wall.\n`


        if (verseNumber === 2)
            bottlesText =
                `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.\n` +
                `Take one down and pass it around, ${verseNumber - 1} bottle of beer on the wall.\n`

        if (verseNumber > 2)
            bottlesText =
                `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.\n` +
                `Take one down and pass it around, ${verseNumber - 1} bottles of beer on the wall.\n`

        return bottlesText;
    }

    verses(maxVerse, minVerse) {
        let verseList = [];

        for (let i = maxVerse; i >= minVerse; i--) {
            verseList.push(this.verse(i))
        }

        return verseList.join('\n')
    }

    song() {
        return this.verses(99, 0)
    }
}