//the function have to return an array of numbers, between the min and max, and with a size of n
//numbers cannot be repeated

//function to verify that arguments are valids
var areValidArguments = (n,min,max) => {
    return !isNaN(n) && !isNaN(min) && !isNaN(max) && (max - min + 1 >= n );
}

//function to check if a number is already in the array
var isRepeated = (array, target) => {
    for (item of array) {
        if (item === target) return true;
    }
    return false;
}

// function to generate the random number
var randomPick = (n, min, max) => {
    //to avoid infinites loops we verify that arguments are valids
    if (!areValidArguments(n,min,max)) return "Los argumentos no son validos.";

    //initialize variables
    var array = [];
    var arrayLength = n;
    var range = max - min + 1;
    var i= 0;

    

    //will be generating random numbers until the array is completed
    while (i < arrayLength) {
        var randomNumber = Math.floor(Math.random() * range) + min;

        // if the number is not repeated include in the array
        if (!isRepeated(array, randomNumber)) {
            array.push(randomNumber);
            i++;
        }
    }

    return array; 
  }

  console.log(randomPick(6, 1, 49)); // Apuesta automática de la primitiva
  console.log(randomPick(15, 1, 15)); // Escoge combinación de bolas de billar
  console.log(randomPick(1, 1, 6)); // Tirada aleatoria de un dado