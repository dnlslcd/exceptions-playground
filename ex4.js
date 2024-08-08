
function findPlate(plates, plate) {

        // Validar que plate no es una cadena vacía
        if (plate.trim() === '') {
            throw new Error("Plate cannot be an empty string.");
        }

        // validar que plate sea realmente un string. Si no lo es, debemos lanzar una excepción con un mensaje adecuado
        if (!typeof plate === String){
            throw new Error("Plate must be a string.");
        }

        // validar que plate sea realmente una matrícula de coche (4 letras cualesquiera seguidas de 3 números). Si no es una matrícula válida debemos lanzar una excepción con un mensaje adecuado.
        if (plate != /^[a-z]{4}[0-9]{3}$/i){
            throw new Error("Plate must be a valid car plate (4 letters followed by 3 numbers)");
        }

        // Buscar la matrícula en el array de matrículas
        return plates.includes(plate);
}

// Ejemplo de uso
const platesArray = ["ABC1234", "XYZ7890", "LMN4567"];

try {
    console.log(findPlate(platesArray, "XYZ7890")); // true
    console.log(findPlate(platesArray, "ABC0000")); // false
    console.log(findPlate(platesArray, ""));        // Lanza error: Plate cannot be an empty string.
    console.log(findPlate(platesArray, 123456));    // Lanza error: Plate must be a string.
    console.log(findPlate(platesArray, "INVALID@PLATE")); // Lanza error: Plate is not in a valid format.
} catch (error) {
    console.error("An error occurred:", error.message);
}
