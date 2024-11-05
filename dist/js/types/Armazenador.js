export class Armazenador {
    constructor() { }
    static salvar(chave, value) {
        const valorConmoString = JSON.stringify(value);
        localStorage.setItem(chave, valorConmoString);
    }
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
