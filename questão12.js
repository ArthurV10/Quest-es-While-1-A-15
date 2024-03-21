//Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
//responda quem ganha a partida. A partida chega ao final se:
//· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
//· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
//diferença de 2 pontos sobre o adversário.

import { print, pergunta } from "../Ajuda/funções.js"

function main() {
    print(`
    =====================
    **Jogo de Ping-Pong**
    =====================
    `)

    //Entrada
    const jogador1 = pergunta("Digite o nome do primeiro jogador: ").toUpperCase()
    const jogador2 = pergunta("Digite o nome do segundo jogador: ").toUpperCase()
    let qm_marcou = ''

    //Processamento
    let vencedor = jogo(jogador1, jogador2)

    //Saida
    print(`
    =========|Vencedor|==========
    ${vencedor}
    =============================`)
}

//Funçôes
function jogo(jogador1, jogador2) {
    let pontos_jogador1 = 0
    let pontos_jogador2 = 0

    while (true) {
        let qm_marcou = ``
        let placar = `
        ************|PLACAR|**************
        ==================================
        ${jogador1} = ${pontos_jogador1}
                    X
        ${jogador2} = ${pontos_jogador2}
        ==================================
        **********************************
        `
        print(placar)

        qm_marcou = pergunta(`
        Quem marcou o ponto:
        A = ${jogador1}
        B = ${jogador2}
        Resposta: `).toLowerCase()

        if (qm_marcou === 'a') {
            pontos_jogador1++
        } else if (qm_marcou === 'b') {
            pontos_jogador2++
        }

        if ((pontos_jogador1 >= 21 && pontos_jogador1 - pontos_jogador2 >= 2) ||
            (pontos_jogador2 >= 21 && pontos_jogador2 - pontos_jogador1 >= 2)) {
            break
        }
    }

    return pontos_jogador1 > pontos_jogador2 ? `${jogador1} É O VENCEDOR!` : `${jogador2} É O VENCEDOR!`
}

main()

