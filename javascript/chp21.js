for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    const capitalLetter = String.fromCharCode(i);
    const smallLetter = capitalLetter.toLowerCase();
    alert(`${capitalLetter} ----> ${smallLetter}`);
  }
  