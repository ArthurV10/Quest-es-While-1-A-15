//Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
//pode levantar vôo ou não. Considere os seguintes critérios:

//· O peso de decolagem da aeronave é sempre igual a 500.000 kg;
//· O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos
//passageiros;
//· O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
//· A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
//· O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
//· O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
//bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso
//estimado de 10kg.

//O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
//ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
//bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
//de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
//mensagem indicando a liberação da decolagem ou não.

import {print, pede_numero_positivo, pede_numero_positivo_com_zero} from "../Ajuda/funções.js"

function main(){
    print(`
    ====================================================
    Liberação de Decolagem!
    Quando o codigo bilhete for '0' o programa encerra
    ====================================================
    `)

    //Entrada
    const containers = pede_numero_positivo("Digite o numero de containers: ")
    const peso_por_containers = pede_numero_positivo("Digite o peso de cada container: ")
    let passageiros = pede_numero_positivo("Digite o numero de passageiros: ")
    let combustivel = pede_numero_positivo("Digite a quantidade de combustivel do avião(Em litros): ")
    
    //Verificar
    while(combustivel < 10000 ){
        print(`
        A quantidade de combustivel é insuficiente, para o avião decolar
        Digite novamente...
        `)
        combustivel = pede_numero_positivo_com_zero("Digite a quantidade de combustivel novamente: ")
    }

    //Processamento
    let analisar_containers = peso_containers(containers, peso_por_containers) 
    let pedir_codigo_e_bagagem = bagagem(passageiros)
    let peso_passageiros = pedir_dados(passageiros)
    let peso_bagagem = apresentar_peso_bagagem(pedir_codigo_e_bagagem)
    let peso_total_parcial = (peso_passageiros + analisar_containers + peso_bagagem)
    let analisar_qtd_combustivel = qtd_possivel_combustivel(peso_total_parcial)
    let peso_total_final = calcular_peso_final(combustivel, peso_total_parcial)
    let analisar_liberação = foi_liberado_ou_nao(peso_total_final, analisar_qtd_combustivel)

    

    //Saida
    const resposta = `
    **********|Dados Aereos|***************
    =======================================
    Quantidade de Passageiros: ${passageiros}
    Volume Total de Bagagens: ${pedir_codigo_e_bagagem}
    Peso Total dos Passageiros: ${peso_passageiros}
    Quantidade Possivel de Combustivel: ${analisar_qtd_combustivel.toFixed(0)}
    Estado da Liberação:
    ---------------------------------------
    ${analisar_liberação}
    =======================================
    ***************************************
    `
    print(resposta)
    }

//Funçôes
function peso_containers(qtd_containers, peso_do_container){
    return(qtd_containers * peso_do_container)
}

function bagagem(qtd_passageiros) {
    let qtd_codigos = 0
    let qtd_bagagem = 0
    let continuar = true

    while (qtd_codigos < qtd_passageiros && continuar) {
        let codigo = pede_numero_positivo_com_zero("Digite o codigo do bilhete: ")
        if (codigo === 0) {
            continuar = false
        } else {
            qtd_bagagem += pede_numero_positivo_com_zero("Digite o numero de bagagens que possui: ")
            qtd_codigos++
        }
    }
    return qtd_bagagem
}


function pedir_dados(qtd_passageiros){
    let peso_passageiros = 0
    peso_passageiros = (qtd_passageiros * 70)
    return peso_passageiros
}

function apresentar_peso_bagagem(qtd_bagagem){
    let peso_bagagem = 0
    peso_bagagem = (qtd_bagagem * 10)
    return peso_bagagem
}

function qtd_possivel_combustivel(peso_total){
    let qtd_combustivel = 0
    qtd_combustivel = ((500000 - peso_total) / 1.5)
    return qtd_combustivel
}
function calcular_peso_final(combustivel, peso_parcial){
    let peso_final = 0
    combustivel = (combustivel / 1.5)
    peso_final = (peso_parcial + combustivel)
    return peso_final
}
function foi_liberado_ou_nao(peso_total, qtd_possivel_combustivel){
    if(peso_total > 500000){
        return `
        Não Liberado
        (Carga Maxima Ultrapassada)`
    }
    else if(qtd_possivel_combustivel < 10000){
        return `
        Não Liberdo
        (Quantidade de Combustivel Insuficiente)`
    }
    else{
        return `Liberado`
    }
}
main()