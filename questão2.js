import {print, pede_numero_positivo} from "../Ajuda/funções.js"

function main(){
    print(`
    ====================
    MMC de Dois Numeros!
    ====================
    `)
    //Entrada
    const numero1 = pede_numero_positivo("Digite o primeiro numero: ")
    const numero2 = pede_numero_positivo("Digite o segundo numero: ")
    //Verificar
    if(numero1 === 1 && numero2 === 1)
    print("O MMC é 1")
    //Processamento
    const verificar_mmc = calcular_mmc(numero1, numero2)
    //Saida
    const resposta = `
    ************************************
    ====================================
    O MMC de ${numero1} e ${numero2} é:
    RESPOSTA: ${verificar_mmc}
    ====================================
    ************************************
    `
    print(resposta)
}
//Funçôes
function calcular_mmc(number1, number2){
    let divisor = 2
    let multiplicação = 1
    if (number1 === 1) {
        return number2;
    }
    else if(number2 === 1) {
        return number1;
    }

    while(number1 !== 1 || number2 !== 1){
        if(number1 % divisor === 0 && number2 % divisor === 0){
            number1 = number1 / divisor
            number2 = number2 / divisor
            multiplicação *= divisor
        }
        else if(number1 % divisor === 0){
            number1 = number1 / divisor
            multiplicação *= divisor
        }
        else if(number2 % divisor === 0){
            number2 = number2 / divisor
            multiplicação *= divisor
        }
        else if(number1 % divisor !== 0 && number2 % divisor !== 0){
            divisor++
        }
    }
    return multiplicação
}
main()