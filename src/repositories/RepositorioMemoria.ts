import { ItemAcervo } from "../models/ItemAcervo";

export class ItemNaoEncontradoError extends Error {
  constructor(id: number) {
    super(`Item com ID ${id} não encontrado no acervo.`);
    this.name = "ItemNaoEncontradoError";
  }
}

export class RepositorioMemoria<T extends ItemAcervo> {
  private itens: T[] = [];

  public adicionar(item: T): void {
    this.itens.push(item);
  }

  public listarTodos(): ReadonlyArray<T> {
    return [...this.itens];
  }

  public buscarPorId(id: number): T {
    const item = this.itens.find((i) => i.id === id);
    if (!item) {
      throw new ItemNaoEncontradoError(id);
    }
    return item;
  }

  public filtrar(criterio: Partial<{ titulo: string; emprestado: boolean }>): T[] {
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

  public remover(id: number): void {
    const index = this.itens.findIndex((i) => i.id === id);
    if (index === -1) {
      throw new ItemNaoEncontradoError(id);
    }
    this.itens.splice(index, 1);
  }
}