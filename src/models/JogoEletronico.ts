import { ItemAcervo } from "./ItemAcervo";

export class JogoEletronico extends ItemAcervo {
  constructor(
    titulo: string,
    anoPublicacao: number,
    private _plataforma: string,
    private _classificacaoIndicativa: string
  ) {
    super(titulo, anoPublicacao);
  }

  public get plataforma(): string {
    return this._plataforma;
  }

  public get classificacaoIndicativa(): string {
    return this._classificacaoIndicativa;
  }

  public override calcularMulta(diasAtraso: number): number {
    if (diasAtraso <= 0) return 0;
    return diasAtraso * 5.0;
  }
}