// Function that uses one parameter
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  console.log(introduction("Akinyi"));
  
  // Function that uses two parameters
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguage("AKinyi", "Ember.js"));
  
  // Function with an optional parameter
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguageOptional("Vincent", "JavaScript"));
  console.log(introductionWithLanguageOptional("Gracie")); 
  


