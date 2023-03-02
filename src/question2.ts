export {}

function getVowels(str: string): number {
    const vowels: string = 'aAeEiIoOuU';
    let vowelsCount: number = 0;
  
    for (let i: number = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        vowelsCount += 1;
      }
    }
  
    return vowelsCount;
  }
  
  console.log(`Number of vowels in 'Javascript is really hard': ${getVowels('Javascript is really hard')}`);
  