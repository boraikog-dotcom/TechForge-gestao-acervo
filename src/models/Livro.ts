import { ItemAcervo } from "./ItemAcervo";
import { Reservavel } from "../interfaces/Reservavel";

export class Livro extends ItemAcervo implements Reservavel {
  private _reservadoPor: string | null = null;

  constructor(
    titulo: string,
    anoPublicacao: number,
    private _autor: string,
    private _numeroPaginas: number
  ) {
    super(titulo, anoPublicacao);
  }

  public get autor(): string {
    return this._autor;
  }

  public get numeroPaginas(): number {
    return this._numeroPaginas;
  }

  public get reservadoPor(): string | null {
    return this._reservadoPor;
  }

  public override calcularMulta(diasAtraso: number): number {
    if (diasAtraso <= 0) return 0;
    return diasAtraso * 2.5;
  }

  public reservar(nomeUsuario: string): void {
    if (this._reservadoPor) {
      throw new Error(`O livro "${this.titulo}" já está reservado para ${this._reservadoPor}.`);
    }
    this._reservadoPor = nomeUsuario;
  }

  public cancelarReserva(): void {
    if (!this._reservadoPor) {
      throw new Error(`O livro "${this.titulo}" não possui reserva ativa.`);
    }
    this._reservadoPor = null;
  }
}