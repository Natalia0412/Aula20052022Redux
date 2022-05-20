//arrow function
//se chama : criarContrato
//recebe:nome e valor
//devolve:um json com type= criar contrato e payload igual a um json com nome e valor

const criarContrato=(nome, valor)=> {
    return{
        type:"CRIAR_CONTRATO",
        payload:{
            nome,valor
        }
    }
}

//function regular(usar function)
//cancelarContrato
//recebe:nome
//devolve:um json com type= CANCELAR_CONTRATO E PAYLOAD IGUAL A UM JSON COM NOME

function cancelarContrato(nome){
    return{
        type:"CANCELAR_CONTRATO",
        payload:{
            nome
        }
    }
}
//uma função criAdora de ação para solicitações de cashback

const solicitarCashback=(nome,valor)=>{
    return{
        type:"SOLICITAR_CASHBACK",
        payload:{
            nome,valor
        }
    }
}