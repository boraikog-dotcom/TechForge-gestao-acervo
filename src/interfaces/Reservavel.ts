export interface Reservavel {
  reservar(nomeUsuario: string): void;
  cancelarReserva(): void;
}