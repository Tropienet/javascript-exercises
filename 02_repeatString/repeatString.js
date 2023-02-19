const repeatString = function(word, numOfRepetitions) {

    let finalWord = "";

    if( numOfRepetitions < 0 ) {
        return "ERROR";
    }

    for( let i = 0; i < numOfRepetitions; i++ ) {
        finalWord += word
    }

    return finalWord;

};

// Do not edit below this line
module.exports = repeatString;
