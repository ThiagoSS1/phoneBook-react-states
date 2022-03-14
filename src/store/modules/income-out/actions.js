// devolver a lista de entrada
export function getIncomeOut(payload) {
    return {
        // nome unico para a acao
        type: 'incomeOut/GET',
        //devolve junto o payload recebido
        payload
    };
}

// adicionar mais um item na lista
export function setIncomeOut(payload) {
    return {
        // nome unico 
        type: 'incomeOut/SET',
        // e o objeto que eu quero adicionar
        payload,
    };
}