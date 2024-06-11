function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
  return string.split("").reverse().join("");
}

const calculator = {
  add: function(a, b){
    return a + b;
  },

  subtract: function(a, b){
    return a - b;
  },

  multiply: function(a, b){
    return a * b;
  },

  divide: function(a, b){
    if (b === 0){
      throw new Error("Division by zero");
    }
    return a / b;
  }
}  

function caesarCipher(string, shift){
  return string.split("").map(char => {
    if (/[a-zA-Z]/.test(char)){
      const offset = char.charCodeAt(0) < 97 ? 65 : 97;

      const shiftedChar = String.fromCharCode(((char.charCodeAt(0) - offset + shift) % 26 + 26) % 26 + offset);
      return char === char.toUpperCase() ? shiftedChar.toUpperCase() : shiftedChar.toLocaleLowerCase();
    }

    return char;
  }).join("");
}

function analyzeArray(array){
  const sum = array.reduce((acc, val) => acc + val, 0);
  const average = sum / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average,
    min,
    max,
    length: array.length
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator, 
  caesarCipher,
  analyzeArray
};



