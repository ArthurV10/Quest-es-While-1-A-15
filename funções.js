import { question } from "readline-sync"

export function pede_numero(texto){
   return Number(question(texto))
}

export function print(texto){
    console.log(texto)
}

export function pergunta(texto){
    return question(texto)
}

export function pede_numero_positivo(texto){
    let numero = pede_numero(texto)

    while (numero < 0){
    print("Numero digitado Invalido!")
    numero = pede_numero("Digite um numero positvo: ")

    }if(numero > 0){
    return numero
    }
}

export function pede_numero_positivo_com_zero(texto){
    let numero = pede_numero(texto)

    while (numero < 0){
    print("Numero digitado Invalido!")
    numero = pede_numero("Digite um numero positvo: ")

    }if(numero >= 0){
    return numero
    }
}
