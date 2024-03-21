//Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.

import {print, pede_numero_positivo} from "../Ajuda/funções.js"

function main(){
    print(`
    ====================================
    Verificar se os numeros são Iguais!
    ====================================
    `)
    //Entrada
    const numero1 = pede_numero_positivo("Digite o numero: ")

    //Processamento
    let numero2 = 0
    let resposta = ``
    while(numero1 !== numero2){
        numero2 = pede_numero_positivo(`
        Digite outro numero: `)
        resposta = aparecer_igualdade(numero1, numero2)
    }
    //Saida
    const final = `
    ************************************
    ====================================
    RESPOSTA:
    Os numeros ${numero1} e ${numero2} ${resposta}
    ====================================
    ************************************
    `
    print(final)
}
//Funções
function aparecer_igualdade(number1, number2){
    if(number1 === number2)
    return `são iguais`
}
main()