import {print, pede_numero_positivo} from "../Ajuda/funções.js"

function main(){
    print(`
    ====================
    MDC de Dois Numeros!
    ====================
    `)
    //Entrada
    const numero1 = pede_numero_positivo("Digite o primeiro numero: ")
    const numero2 = pede_numero_positivo("Digite o segundo numero: ")
    //Verificar
    if(numero1 === 1 && numero2 === 1)
    print("O MDC é 1")
    //Processamento
    const verificar_mdc = calcular_mdc(numero1, numero2)
    //Saida
    const resposta = `
    ************************************
    ====================================
    O MDC de ${numero1} e ${numero2} é:
    RESPOSTA: ${verificar_mdc}
    ====================================
    ************************************
    `
    print(resposta)
}
//Funçôes
function calcular_mdc(number1, number2) {
    let divisor = 2
    let mdc = 1

    while (number1 > 1 && number2 > 1 && divisor <= number1 && divisor <= number2) {
        if (number1 % divisor === 0 && number2 % divisor === 0) {
            mdc *= divisor
            number1 /= divisor
            number2 /= divisor
        } else {
            divisor++
        }
    }

    return mdc
}
main()