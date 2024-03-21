//Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
//divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
//chegar a 2.
import {print, pede_numero_positivo} from "../Ajuda/funções.js"

function main(){
    print(`
    ==================================
    Divisão de um numero, até que seu
    divisor seja 2
    ==================================
    `)
    //Entrada
    let X = pede_numero_positivo(`
    Digite o numero: `)
    let N = pede_numero_positivo(`
    Digite o seu divisor: `)

    //Verificar
    if(N <= 2){
        print(`
        =============================
        Digitação Inavalida!
        Digite um número maior que 2
        =============================`)
    }
    //Processamento
    while(N > 2){
        X = divisão(X, N)
        N -= 1
    
    //Saida
    const resposta =`
    ====================================
    Resultado = ${X}
    Divisor = ${N}
    ====================================
    `
    print(resposta)
}
}
//Funçôes
function divisão(number1, number2){
    return (number1 / number2)
}
main()