/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

*/

const numberToTest = 233;

function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacciFinder(numberToTest) {
    const arrFibonacci = [];
    let i = 0;
    let current;

    while (true) {
        current = fibonacci(i);
        arrFibonacci.push(current);

        if (current >= numberToTest) {
            if (current === numberToTest) {
                console.log(`O Número ${numberToTest} pertence à sequência Fibonacci.\nA Sequência até o ${numberToTest} é: ${arrFibonacci}`);
                return true;
            } else {
                console.log(`O Número ${numberToTest} não pertence à sequência Fibonacci.`);
                return false;
            }
        }
        i++;
    }
}

fibonacciFinder(numberToTest);