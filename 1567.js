// https://leetcode.com/problems/determine-if-two-strings-are-close/description/
// https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/6169124/easy-o-n-hashmap-solution/

function closeStrings(word1, word2) {
    // If the lengths of the two words are different, they cannot be close
    if (word1.length !== word2.length) {
        return false;
    }

    // Count the frequency of each character
    const charFreq1 = {};
    const charFreq2 = {};

    for (const c of word1) {
        charFreq1[c] = (charFreq1[c] || 0) + 1;
    }
    for (const c of word2) {
        charFreq2[c] = (charFreq2[c] || 0) + 1;
    }

    // Get the keys and values of the frequency objects
    const keys1 = Object.keys(charFreq1);
    const keys2 = Object.keys(charFreq2);

    // Check two conditions for words to be close:
    // 1. Both words must contain the same set of unique characters.
    // 2. The sorted frequency counts of the characters in both words must match.
    return (
        keys1.sort().join('') === keys2.sort().join('') &&
        Object.values(charFreq1).sort((a, b) => a - b).join('') === 
        Object.values(charFreq2).sort((a, b) => a - b).join('')
    );
}

// console.log(closeStrings("abc", "bca")); // true
// console.log(closeStrings("a", "aa"));   // false
console.log(closeStrings("cabbba", "abbccc")); // true
