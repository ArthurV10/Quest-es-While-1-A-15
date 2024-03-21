//Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
//entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
//responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
//entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:

//· a porcentagem de cada candidato;
//· a porcentagem dos outros candidatos;
//· a porcentagem de eleitores indecisos;
//· a porcentagem de votos nulos/brancos;
//· o total de entrevistados;
//· uma mensagem indicando a possibilidade ou não de haver 2o turno.

import { print, pede_numero } from "../Ajuda/funções.js"

function main() {
    print(`
    =======================
    ELEIÇÕES
    Quando voto for '-1', o programa encerra
    =======================
    `)

    // Inicialização das variáveis
    let total_de_pessoas_que_votaram = 0
    let Serra = 0, Dilma = 0, Ciro = 0, Indeciso = 0, Outros = 0, nulo_branco = 0

    // Entrada
    let voto = pede_numero(`
    Digite qual opção de voto você deseja votar:
    ============================================
    45 = Serra
    13 = Dilma
    23 = Ciro Gomes
    99 = Indeciso
    98 = Outros
    0 = Nulo/Branco
    ============================================
    Voto: `)

    // Processamento
    while (voto !== -1) {
        total_de_pessoas_que_votaram++
        if (voto === 45) {
            Serra++
        } else if (voto === 13) {
            Dilma++
        } else if (voto === 23) {
            Ciro++
        } else if (voto === 99) {
            Indeciso++
        } else if (voto === 98) {
            Outros++
        } else if (voto === 0) {
            nulo_branco++
        }
        voto = pede_numero("Digite o próximo Voto: ")
    }

    // Cálculo das porcentagens
    Serra = (Serra / total_de_pessoas_que_votaram) * 100
    Dilma = (Dilma / total_de_pessoas_que_votaram) * 100
    Ciro = (Ciro / total_de_pessoas_que_votaram) * 100
    Indeciso = (Indeciso / total_de_pessoas_que_votaram) * 100
    Outros = (Outros / total_de_pessoas_que_votaram) * 100
    nulo_branco = (nulo_branco / total_de_pessoas_que_votaram) * 100

    // Verificação da situação
    let situacao = ""
    if (Serra > Dilma && Serra > Ciro && Serra > 50) {
        situacao = "Serra GANHOU! Sem possibilidade de 2º Turno"
    } else if (Serra > Dilma && Serra > Ciro) {
        situacao = "Serra GANHOU! Com possibilidade de 2º Turno"
    } else if (Dilma > Serra && Dilma > Ciro && Dilma > 50) {
        situacao = "Dilma GANHOU! Sem possibilidade de 2º Turno"
    } else if (Dilma > Serra && Dilma > Ciro) {
        situacao = "Dilma GANHOU! Com possibilidade de 2º Turno"
    } else if (Ciro > Serra && Ciro > Dilma && Ciro > 50) {
        situacao = "Ciro GANHOU! Sem possibilidade de 2º Turno"
    } else if (Ciro > Serra && Ciro > Dilma) {
        situacao = "Ciro GANHOU! Com possibilidade de 2º Turno"
    } else if (Outros > Ciro && Outros > Dilma && Outros > Serra) {
        situacao = "Outro Candidato, fora dos Principais, tem a possibilidade de ter ganhado!"
    }
    else{
        situacao = "Empate entre todos os candidatos, ocorrerá 2º Turno"
    }

    // Saída
    print(`
    =======================================================
    ----------------------------------------
    Porcentagem de Cada Candidato:
    Serra = ${(Serra).toFixed(0)}%
    Dilma = ${(Dilma).toFixed(0)}%
    Ciro = ${(Ciro).toFixed(0)}%
    Outros = ${(Outros).toFixed(0)}%
    ----------------------------------------
    Porcentagem de Votos Não Contabilizados:
    Indecisos = ${(Indeciso).toFixed(0)}%
    Nulo/Branco = ${(nulo_branco).toFixed(0)}%
    Total de Participantes = ${(total_de_pessoas_que_votaram).toFixed(0)}
    ----------------------------------------
    Situação Atual: ${situacao}
    ========================================================
    `)
}

main()

