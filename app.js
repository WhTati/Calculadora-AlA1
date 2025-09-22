const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Ingrese el primer numero ", primerInput => {
    const num1 = parseFloat(primerInput);
    readline.question("Ingrese el segundo numero ", segundoInput => {
        const num2 = parseFloat(segundoInput);
        readline.question("Ingrese la operacion (+, -, *, /) ", operacion => {
            let resultado;
            switch (operacion) {
                case "+":
                    resultado = num1 + num2;
                    break;
                case "-":
                    resultado = num1 - num2;
                    break;
                case "*":
                    resultado = num1 * num2;
                    break;
                case "/":
                    if (num2 !== 0) {
                        resultado = num1 / num2;
                    } else {
                        console.log("Error: Division por cero no es permitida.");
                        readline.close();
                        return;
                    }
                    break;
                default:
                    console.log("Operacion no valida.");
                    readline.close();
                    return;
            }   
            console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
            readline.close();
        });
    });
});