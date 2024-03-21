//Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
   // descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
   // somas. (Flag: salário=0)
    
    //De Até Acréscimo
    //R$ 0,00 R$ até 2.999,99 || acrescimo 25 %
    //R$ 3.000,00 até R$ 5.999,99 || acrescimo 20 %
   //R$ 6.000,00 até R$ 9.999,99 || acrescimo 15 %
    //Acima de R$ 10.000,00 || acrescimo 10 %

import {print, pede_numero_positivo_com_zero} from "../Ajuda/funções.js"
    
function main(){
    print(`
    =============================
    Salarios:
    Seus Antigos e Novos Valores!
    =============================
    `)

    //Entrada
    let salario_inicial = pede_numero_positivo_com_zero("Digite o salario inicial: ")

    //Processamento
    let salario_final = novo_salario(salario_inicial)
    let soma_salarios_iniciais = 0
    let soma_novos_salarios = 0
    let difereça_entre_somas = 0

    while(salario_inicial !== 0){
        soma_salarios_iniciais += salario_inicial
        soma_novos_salarios += salario_final
        difereça_entre_somas = subtração(soma_salarios_iniciais, soma_novos_salarios)
        const resposta = `
        ************************************
        ====================================
        Salario Incial = ${salario_inicial}
        Novo Salario = ${salario_final}
        Soma de todos os Salarios Iniciais:
        É igual = ${soma_salarios_iniciais}
        Soma de todo os Novos salarios:
        É igual = ${soma_novos_salarios}
        Diferença entre as somas = ${difereça_entre_somas}
        ====================================
        ************************************
        `
        print(resposta)
        salario_inicial = pede_numero_positivo_com_zero("Digite o salario inicial: ")
    }
    if(salario_inicial === 0){
        print("Encerrando Programa...")
    }
}
//Funçôes
function novo_salario(salario_inicial){
    let acrescimo = 0
    if(salario_inicial < 3000){
        acrescimo = (salario_inicial * 0.25)
        return (salario_inicial + acrescimo)
    }
    else if(salario_inicial < 6000){
        acrescimo = (salario_inicial * 0.20)
        return (salario_inicial + acrescimo)
    }
    else if(salario_inicial < 1000){
        acrescimo = (salario_inicial * 0.15)
        return (salario_inicial + acrescimo)
    }
    else{
        acrescimo = (salario_inicial * 0.10)
        return (salario_inicial + acrescimo)
    }
}

function subtração(soma_inicial, soma_nova){
     return (soma_nova - soma_inicial)
}
main()