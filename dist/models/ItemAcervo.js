"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAcervo = void 0;
class ItemAcervo {
    _titulo;
    _anoPublicacao;
    static _contadorId = 1;
    id;
    _emprestado = false;
    constructor(_titulo, _anoPublicacao) {
        this._titulo = _titulo;
        this._anoPublicacao = _anoPublicacao;
        this.id = ItemAcervo._contadorId++;
    }
    get titulo() {
        return this._titulo;
    }
    get anoPublicacao() {
        return this._anoPublicacao;
    }
    get emprestado() {
        return this._emprestado;
    }
    get statusDisponibilidade() {
        return this._emprestado ? "Indisponível (Emprestado)" : "Disponível";
    }
    emprestar() {
        if (this._emprestado) {
            throw new Error(`O item "${this._titulo}" já está emprestado.`);
        }
        this._emprestado = true;
    }
    devolver() {
        if (!this._emprestado) {
            throw new Error(`O item "${this._titulo}" não está emprestado no momento.`);
        }
        this._emprestado = false;
    }
}
exports.ItemAcervo = ItemAcervo;
