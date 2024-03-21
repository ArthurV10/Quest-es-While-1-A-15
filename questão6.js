//Escreva um algoritmo para determinar o número de dígitos de um número informado
import {print, pede_numero_positivo} from "../Ajuda/funções.js"

function main(){
    print(`
    =====================================
    Verificar a quantidade de algarismos
    =====================================
    `)
    //Entrada
    const numero1 = pede_numero_positivo("Digite o numero: ")
    //Verificar
    //Processamento
    const qtd_algarismos = verificar_algarismos(numero1)
    //Saida
    const resposta = `
    ************************************
    ====================================
    Resultado:
    ${qtd_algarismos}
    ====================================
    ************************************
    `
    print(resposta)
}
//Funçôes
function verificar_algarismos (number1) {
    let verificador = 1
    let contador = 1
    while(number1 >= 1){
        if(number1 / verificador < 10){
            break
        }
        else{
            verificador *= 10
            contador ++
        }
    }
    if(contador === 1){
        return `O numero possui 1 algorismo!`
    }
    else{
    return `O numero possui ${contador} algorismos!`
    }
}
main()