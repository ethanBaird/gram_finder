const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('');
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
  return this.words.map(phrase => phrase.toUpperCase())
}

PangramFinder.prototype.isPangram = function () {
  const sortedAlphabet = this.sortPhrase(this.alphabet);
  const sortedPhrase = this.sortPhrase(this.phrase);
  let uniqueSortedPhrase = [...new Set(sortedPhrase)];
  uniqueSortedPhrase.pop()
  // console.log(uniqueSortedPhrase);
  if (sortedAlphabet.length === uniqueSortedPhrase.length && sortedAlphabet.every((v, i) => v === uniqueSortedPhrase[i])) {
    return true
  }
  else {
    return false
  }
  
}

module.exports = PangramFinder;
