function introduction(name){
return `Hi, my name is ${name}.`

}
console.log(introduction("Dorahely"));

function introductionWithLanguage(name, language) {
return `Hi, my name is ${name} and I am learning to program in ${language}.`

}
console.log(introductionWithLanguage("Jan", "python"))

function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    
    }