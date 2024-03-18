import { pede_numero_positivo, print} from "./util.js"

function main(){
print(`
========================================
Analise do Numero e seus divisores
Quando "0" for digitado o codigo encerra
========================================
`)
//entrada
let numero = pede_numero_positivo("Digite o numero: ")

while(numero !== 0){
    let analisar_numeros = dizer_numeros_e_divisores(numero)
    let aparecer_resultado = `
    Os Numeradores e Divisores são:
    ===============================
    ${analisar_numeros}
    ===============================`

    print(aparecer_resultado)

    numero = pede_numero_positivo("Digite outro numero: ")
}
if(numero === 0)
return print("Encerrando Programa")
}

//funções para analisar os numeros de uma vez

function dizer_numeros_e_divisores(primeiro_numero){
    let numero = primeiro_numero
    let numerador = numero
    let dividendo = numero
    let divisores = ``

    while(dividendo >= 1){
        if(numerador % dividendo === 0){
        divisores += `${dividendo}, `
        }
        dividendo = (dividendo - 1)
    }
    return `
    Numero: ${numero}
    Divisores: ${divisores}`
}
main()