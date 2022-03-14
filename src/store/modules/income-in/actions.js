// devolver a lista de entrada
export function getIncomeIn(payload) {
    return {
        // nome unico para a acao
        type: 'incomeIn/GET',
        //devolve junto o payload recebido
        payload
    };
}

// adicionar mais um item na lista
export function setIncomeIn(payload) {
    return {
        // nome unico 
        type: 'incomeIn/SET',
        // e o objeto que eu quero adicionar
        payload,
    };
}