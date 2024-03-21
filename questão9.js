//Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
//prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
//quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
//clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:

//Lugar         Pontos
// 1               9
// 2               6
// 3               4
// 4               3

//Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor.
//10. Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave

import { print, pergunta, pede_numero_positivo_com_zero, pede_numero_positivo } from "../Ajuda/funções.js"

function main() {
    print(`
    ================================
    Prova De Natação!
    Se Prova e Numero de nadadores 
    For igual "0"
    O código encerra
    (Pontuação Válidade até 4º lugar)
    =================================
    `)
    //Entrada
    let prova = pede_numero_positivo_com_zero("Digite o numero da prova: ")
    let qtd_nadadores = pede_numero_positivo_com_zero("Digite o numero de nadadores na prova: ")

    //Processamento 
    let pedir_dados = obter_dados(prova, qtd_nadadores)

    //Saida
    print(pedir_dados)
}

//Funções
function obter_dados(prova, qtd_nadadores) {
    let resposta_parcial = ``
    let nome = ``
    let classificacao = 0
    let tempo = 0
    let clube = ``
    let pontosA = 0
    let pontosB = 0
    let vencedor = `Ta tentando me enganar? >:(`
    while (prova !== 0 && qtd_nadadores !== 0) {
        let continuidade = 1
        while (continuidade <= qtd_nadadores) {
            nome = pergunta("Digite o Nome do Nadador: ")
            classificacao = pede_numero_positivo("Digite a classificação do competidor: ")
            tempo = pede_numero_positivo("Digite o tempo de conclusão do competidor: ")
            clube = verificar_clube(pergunta("Digite se ele faz parte do clube 'A' ou 'B': ").toLowerCase())
            if (clube === "A") {
                pontosA += verificar_pontos(classificacao)
            } else if (clube === "B") {
                pontosB += verificar_pontos(classificacao)
            }
            resposta_parcial += (`
            =============================
            Prova: ${prova}
            Nome: ${nome}
            Classificação: ${classificacao}
            Tempo: ${tempo}
            Clube: ${clube}
            Pontos: ${verificar_pontos(classificacao)}
            =============================
            `)
            print(resposta_parcial)
            continuidade++
        }
        if (prova === 0 && qtd_nadadores === 0) {
            print("Encerrando Programa...")
            break
        }
        prova = pede_numero_positivo_com_zero("Digite o número da próxima prova: ")
        qtd_nadadores = pede_numero_positivo_com_zero("Digite o número de nadadores da próxima prova: ")
    }
    vencedor = verificar_vencedor(pontosA, pontosB)
    return vencedor
}

function verificar_pontos(classificacao) {
    let pontos = 0
    if (classificacao === 1) {
        pontos = 9
    } else if (classificacao === 2) {
        pontos = 6
    } else if (classificacao === 3) {
        pontos = 4
    } else if (classificacao === 4) {
        pontos = 3
    } else {
        pontos = 0
    }
    return pontos
}

function verificar_clube(clube) {
    while (clube !== "a" && clube !== "b") {
        print("Digitação invalida")
        clube = pergunta("Digite 'A' ou 'B': ").toLowerCase()
    }
    if(clube === "a"){
        return "A"
    }
    else if(clube === "b"){
        return "B"
    }
}

function verificar_vencedor(pontosA, pontosB) {
    if (pontosA > pontosB) {
        return `
        ==================
        A EQUIPE CAMPEÃ É:
        EQUIPE A!!!
        ===================`
    } else if (pontosB > pontosA) {
        return `
        ==================
        A EQUIPE CAMPEÃ É:
        EQUIPE B!!!
        ===================`
    } else {
        return `
        ==================
        A EQUIPE CAMPEÃ É:
        NENHUMA
        DEU EMPATE!
        ===================`
    }
}
main()
