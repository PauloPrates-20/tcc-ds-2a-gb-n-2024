export class Resposta {
    constructor (status = true, erros = {}) {
        this.status = status;
        this.erros = erros;
    }
}