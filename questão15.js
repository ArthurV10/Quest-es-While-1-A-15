import { print, pede_numero_positivo } from "../Ajuda/funções.js"

function main() {
    print(`
    ===========================================
    Ler Numero entre (0 e 225) na base decimal
    e transformar para binario e hexadecimal
    (Digite numero maior que 224 para encerrar)
    ===========================================
    `)

    // Entrada
    let numero = pede_numero_positivo(`
    Digite o numero para conversão: `)

    while(numero <= 224){
        // Processamento para binário
        let binario = decimalParaBinario(numero)
        // Processamento para hexadecimal
        let hexadecimal = decimalParaHexadecimal(numero)

        // Saída
        const resposta = `
        ************************************
        ====================================
        Numero: ${numero}
        Numero em Binario: ${binario}
        Numero em HexaDecimal: ${hexadecimal}
        ====================================
        ************************************
        `
        print(resposta)
        numero = pede_numero_positivo(`
        Digite o Proximo Numero: `)
    }

    print(`
    ==========================
    Encerrando Programa...
    ==========================
    `)
}

function decimalParaBinario(numero) {
    let binario = ""
    while (numero > 0) {
        let resto = numero % 2
        binario = resto + binario
        numero = Math.floor(numero / 2)
    }
    return binario !== "" ? binario : "0"
}

function decimalParaHexadecimal(numero) {
    let hexadecimal = ""
    let valoresHexadecimais = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    while (numero > 0) {
        let resto = numero % 16;
        if (resto > 9) {
            hexadecimal = valoresHexadecimais[resto] + hexadecimal;
        } else {
            hexadecimal = resto + hexadecimal;
        }
        numero = Math.floor(numero / 16);
    }
    return hexadecimal !== "" ? hexadecimal : "0";
}
main()

