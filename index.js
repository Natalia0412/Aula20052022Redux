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
}//arrow function 
//hisotiricoDePedidosCashBackReducer
//recebe uma fatia de estado sobre a qual operar (uma lista chamada historicoDePedidosCashback.Por padrão,ela é uma lista vazia)
//recebe uma ação
//devolve: uma lista que contém todos os pedidos da lista recebida e o pedido descrito no payload da ação
//detalhe : somente operar no estado se o type for apropriado
//detalhe2 :obrigatorio usar o spread(...)
const historicoDePedidosCashbackReducer=(historicoDePedidosCashback=[],acao)=>{
    if(acao.type==="SOLICITAR-CASHBACK"){
    return[
        ...historicoDePedidosCashback,acao.payload
        ]
    }
    return HistoricoDePedidosCashback
 }
//implementar o reducer que manipula o caixa 
// o caixa começa zerado

function caixaReducer(valorEmCaixa=0,acao){
if(acao.type==="SOLICITAR-CASHBACK" )
{
    return valorEmCaixa-acao.payload.valor
}
if (acao.type==="CRIAR_CONTRATO " )
    return valorEmCaixa+acao.payload.valor
return valorEmCaixa
}

//implementar o reducer que lida com a lista de contratos
// ele pode criar contratos e cancelar contratos



const contratosReducer=(listaContratosAtual=[],acao)=>{
    if(acao.type==="CRIAR_CONTRATO"){
        return[listaContratosAtual,acao.payload]
    }
    if(acao.type==="CANCELAR_CONTRATO")
    {
        return listaContratosAtual.filter(contrato=>contrato.nome!==acao.payload.nome)
    }
    return listaContratosAtual
}