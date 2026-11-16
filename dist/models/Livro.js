"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const ItemAcervo_1 = require("./ItemAcervo");
class Livro extends ItemAcervo_1.ItemAcervo {
    _autor;
    _numeroPaginas;
    _reservadoPor = null;
    constructor(titulo, anoPublicacao, _autor, _numeroPaginas) {
        super(titulo, anoPublicacao);
        this._autor = _autor;
        this._numeroPaginas = _numeroPaginas;
    }
    get autor() {
        return this._autor;
    }
    get numeroPaginas() {
        return this._numeroPaginas;
    }
    get reservadoPor() {
        return this._reservadoPor;
    }
    calcularMulta(diasAtraso) {
        if (diasAtraso <= 0)
            return 0;
        return diasAtraso * 2.5;
    }
    reservar(nomeUsuario) {
        if (this._reservadoPor) {
            throw new Error(`O livro "${this.titulo}" já está reservado para ${this._reservadoPor}.`);
        }
        this._reservadoPor = nomeUsuario;
    }
    cancelarReserva() {
        if (!this._reservadoPor) {
            throw new Error(`O livro "${this.titulo}" não possui reserva ativa.`);
        }
        this._reservadoPor = null;
    }
}
exports.Livro = Livro;
