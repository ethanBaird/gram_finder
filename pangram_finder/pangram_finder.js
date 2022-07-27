const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.replace(/[^a-zA-Z]/g,'').split('');
}

PangramFinder.prototype.sortPhrase = function (phrase) {
  const sortedPhrase = phrase.sort((a,b) => {
    if (a < b) {
      return 1
    }
    if (a > b) {
      return -1
    }
    else {
      return 0
    }
  })
  
  return sortedPhrase;
}

PangramFinder.prototype.toUpperCase = function (phrase) {
  return phrase.map(character => character.toUpperCase())
}

PangramFinder.prototype.isPangram = function () {
  let fixedPhrase = this.phrase;
  let fixedAlphabet = this.alphabet;

  // make elements upper case
  fixedPhrase = this.toUpperCase(fixedPhrase)
  fixedAlphabet = this.toUpperCase(fixedAlphabet)
  console.log(fixedPhrase);

  // get unique elements of phrase
  fixedPhrase = [...new Set(fixedPhrase)];
  console.log(fixedPhrase);

 

  // filter out spaces
  fixedPhrase = fixedPhrase.filter(character => character !== ' ')
  console.log(fixedPhrase);


  // sort phrases reverse alphabetical
  fixedAlphabet = this.sortPhrase(fixedAlphabet);
  fixedPhrase = this.sortPhrase(fixedPhrase);
  console.log(fixedPhrase);
  
  if (fixedAlphabet.length === fixedPhrase.length && fixedAlphabet.every((v, i) => v === fixedPhrase[i])) {
    return true
  }
  else {
    return false
  }
  
}

module.exports = PangramFinder;
