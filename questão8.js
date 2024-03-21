//Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
//quando a soma de dois números consecutivos da lista for igual a X.
import { print, pede_numero_positivo } from "../Ajuda/funções.js"

function main() {
    print(`
    ==============================
    A soma dos numeros da lista
    precisa ser igual a X
    ==============================
    `)
    //Entrada
    const X = pede_numero_positivo("Digite o numero: ")
    let X2 = pede_numero_positivo("Digite o primeiro numero da lista: ")
    let numeroY = pede_numero_positivo("Digite o proximo numero da lista: ")

    //Processamento
    let soma = X2 + numeroY
    while (X !== soma) {
        X2 = numeroY
        numeroY = pede_numero_positivo("Digite o proximo numero da lista: ")
        soma = X2 + numeroY
    }

    //Saida
    const final = `
    ************************************
    ====================================
    Resposta:
    A soma de ${X2} e ${numeroY} é igual a ${X}
    ====================================
    ************************************
    `
    print(final)
}
main()
