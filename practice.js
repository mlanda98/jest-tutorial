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

module.exports = {
  capitalize,
  reverseString,
  calculator
};



