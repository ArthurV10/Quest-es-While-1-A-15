import { print, pede_numero_positivo_com_zero, pede_numero_positivo } from "../Ajuda/funções.js"

function main() {
    print(`
    =========================================
    Verificador De Aprovação e Reprovação
    Quando Matricula for '0' programa encerra
    =========================================
    `)
    //Variaveis
    let aprovados = 0
    let reprovados = 0
    let contador = 0
    
    //Entrada
    let matricula = pede_numero_positivo("Digite a matricula: ")

    //Processamento
    while (matricula !== 0) {
        let nota1 = pede_numero_positivo_com_zero("Digite a primeira nota: ")
        let nota2 = pede_numero_positivo_com_zero("Digite a segunda nota: ")
        let nota3 = pede_numero_positivo_com_zero("Digite a terceira nota: ")
        let media = calcular_media_final(nota1, nota2, nota3)
        let situacao = verificar_situacao(media)

        if (situacao === "Aprovado") {
            aprovados++
        } else {
            reprovados++
        }

        let aparecer_final = `
        *********|Dados Escolares|**********
        ====================================
        Matricula: ${matricula}
        Nota1: ${nota1}
        Nota2: ${nota2}
        Nota3: ${nota3}
        -----------------------------------
        Média Final = ${media}
        Situação: ${situacao}
        ====================================
        ************************************
        `
        print(aparecer_final)

        contador++
        matricula = pede_numero_positivo_com_zero("Digite a Proxima matricula: ")
    }

    //Saida
    print(`
    ==========================
    Total de Alunos: ${contador} 
    Aprovados: ${aprovados}
    Reprovados: ${reprovados}
    ==========================
    `)

    print(`
    Encerrando Programa...
    `)
}

//Funções
function calcular_media_final(nota1, nota2, nota3) {
    return ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10
}

function verificar_situacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado"
}
main()
