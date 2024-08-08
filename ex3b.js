/**
 * 1. Entender el enunciado: https://www.codewars.com/kata/563e320cee5dddcf77000158
 */

function getAverage(marks) {
    let result = 0;

    if (!typeof marks == [] || !marks.filter((m) => m == typeof Number)){
        throw new Error("Error ! You must pass an array of numbers as argument");
    }
    //First, we need to get the sum of all the elements of an array. For each array element, we have to sum the next element.
    for (let i = 0; i < marks.length; i++) {
        result += marks[i]; //No estaba entendiendo como hacer que a cada iteración se sumara el resultado anterior, hasta que encontré el operador de "asignación de adición" y recordé el consejo de Esteban de pensar en la variable "i" como índice. 
    }

    //Create a variable that includes the operation needed to get the average (dividing the sum between the array lenght). *Intenté usar el operador de asignación de división para no crear una variable nueva, pero no se me ocurrió como...
    const average = result / marks.length;
    //Cuando 

    //BONUS: Math.floor() rounds down and return the largest integer less than or equal to a given number
    return Math.floor(average);


}

console.log(getAverage([2, 2, 4, 2])); // Debería devolver un 2
//Parentheses were missing, therefore the function was undefined
console.log(getAverage([1, 2, 3, 4, 5])); // Debería devolver un 3
console.log(getAverage([5])); // Debería devolver un 5
console.log(getAverage([12, 17, 4, 12, 2, 2, 16, 12, 2, 11, 16, 5, 20])); // Debería devolver un 10

/** EJERCICIO: Gestión de errores. Descomenta una a una y lanza lase implementa excepciones correspondientes */

// console.log(getAverage(12345)); // Error ! You must pass an array of numbers as argument
console.log(getAverage([1, 2, 3, "4"])); // Error ! You must pass an array of numbers as argument
