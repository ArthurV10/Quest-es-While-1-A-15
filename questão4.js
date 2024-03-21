//Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o resultado da última divisão efetuada.
import {print, pede_numero_positivo} from "../Ajuda/funções.js"

function main(){
    print(`
    ==========================
    Dividir numero por 2, até
    que ele fique menor que 1
    ==========================
    `)
    //Entrada
    let numero1 = pede_numero_positivo(`
    *Digite um numero: `)

    //Processamento
    while(!(numero1 < 1)){
        numero1 = menor_que_um(numero1)
    }

    //Saida
    const resposta = `
    ************************************
    ====================================
    RESPOSTA:
    ${numero1}
    ====================================
    ************************************
    `
    print(resposta)
}
//Funçôes
function menor_que_um(number1){
    return (number1 / 2)
}
main()