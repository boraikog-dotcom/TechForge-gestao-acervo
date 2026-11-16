"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioMemoria = exports.ItemNaoEncontradoError = void 0;
class ItemNaoEncontradoError extends Error {
    constructor(id) {
        super(`Item com ID ${id} não encontrado no acervo.`);
        this.name = "ItemNaoEncontradoError";
    }
}
exports.ItemNaoEncontradoError = ItemNaoEncontradoError;
class RepositorioMemoria {
    itens = [];
    adicionar(item) {
        this.itens.push(item);
    }
    listarTodos() {
        return [...this.itens];
    }
    buscarPorId(id) {
        const item = this.itens.find((i) => i.id === id);
        if (!item) {
            throw new ItemNaoEncontradoError(id);
        }
        return item;
    }
    filtrar(criterio) {
        return this.itens.filter((item) => {
            if (criterio.titulo && !item.titulo.toLowerCase().includes(criterio.titulo.toLowerCase())) {
                return false;
            }
            if (criterio.emprestado !== undefined && item.emprestado !== criterio.emprestado) {
                return false;
            }
            return true;
        });
    }
    remover(id) {
        const index = this.itens.findIndex((i) => i.id === id);
        if (index === -1) {
            throw new ItemNaoEncontradoError(id);
        }
        this.itens.splice(index, 1);
    }
}
exports.RepositorioMemoria = RepositorioMemoria;
