/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/

const originalString = "DRACULA"

function reverse(string){
    const charArray = string.split('');
    const reversedArray = [];
    
    for (let i = 0; i < charArray.length; i++) {
        reversedArray.unshift(charArray[i]);
    }
    return reversedArray.join('');
}

const reversedString = reverse(originalString);

console.log(reversedString);