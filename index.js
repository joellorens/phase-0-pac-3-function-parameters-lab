const name = Aki
const language = Ember.js

function introduction(name) {
    return `Hi, my name is ${name}.`
    console.log(introduction)
}
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    console.log(introductionWithLanguage)   
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    console.log(introductionWithLanguageOptional)   
}



function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`)
}