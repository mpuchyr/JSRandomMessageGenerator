const nouns = [
    "time",
    "year",
    "people",
    "way",
    "day",
    "man",
    "thing",
    "woman",
    "life",
    "child",
    "world",
    "school",
    "state",
    "family",
    "student",
    "group",
    "country",
    "problem",
    "hand",
    "part",
    "place",
    "case",
    "week",
    "company",
    "system",
    "program",
    "question",
    "work",
    "government",
    "number"
]

const adjectives = [
    "other",
    "new",
    "good",
    "high",
    "old",
    "great",
    "big",
    "American",
    "small",
    "large",
    "national",
    "young",
    "different",
    "black",
    "long",
    "little",
    "important",
    "political",
    "bad",
    "white",
    "real",
    "best",
    "right",
    "social",
    "only",
    "public",
    "sure",
    "low",
    "early",
    "able"
]

const verbs = [
    "be",
    "have",
    "do",
    "say",
    "go",
    "can",
    "get",
    "would",
    "make",
    "know",
    "will",
    "think",
    "take",
    "see",
    "come",
    "could",
    "want",
    "look",
    "use",
    "find",
    "give",
    "tell",
    "work",
    "may",
    "should",
    "call",
    "try",
    "ask",
    "need",
    "feel"
]

// Gets a random word from an array of words
function getRandomWord(wordArr) {
    const wordPos = Math.floor(Math.random() * wordArr.length);
    return wordArr[wordPos];
}

console.log(getRandomWord(nouns))