export abstract class ItemAcervo {
  private static _contadorId: number = 1;
  public readonly id: number;
  private _emprestado: boolean = false;

  constructor(
    private _titulo: string,
    private _anoPublicacao: number
  ) {
    this.id = ItemAcervo._contadorId++;
  }

  public get titulo(): string {
    return this._titulo;
  }

  public get anoPublicacao(): number {
    return this._anoPublicacao;
  }

  public get emprestado(): boolean {
    return this._emprestado;
  }

  public get statusDisponibilidade(): string {
    return this._emprestado ? "Indisponível (Emprestado)" : "Disponível";
  }

  public emprestar(): void {
    if (this._emprestado) {
      throw new Error(`O item "${this._titulo}" já está emprestado.`);
    }
    this._emprestado = true;
  }

  public devolver(): void {
    if (!this._emprestado) {
      throw new Error(`O item "${this._titulo}" não está emprestado no momento.`);
    }
    this._emprestado = false;
  }

  public abstract calcularMulta(diasAtraso: number): number;
}