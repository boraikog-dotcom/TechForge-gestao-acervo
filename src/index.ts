import { ItemAcervo } from "./models/ItemAcervo";
import { Livro } from "./models/Livro";
import { JogoEletronico } from "./models/JogoEletronico";
import { RepositorioMemoria, ItemNaoEncontradoError } from "./repositories/RepositorioMemoria";

const acervo = new RepositorioMemoria<ItemAcervo>();

// Criando entidades (IDs gerados automaticamente: 1, 2, 3)
const livro1 = new Livro("Clean Code", 2008, "Robert C. Martin", 464);
const livro2 = new Livro("O Programador Pragmático", 1999, "Andrew Hunt", 352);
const jogo1 = new JogoEletronico("God of War Ragnarök", 2022, "PS5", "18+");

acervo.adicionar(livro1);
acervo.adicionar(livro2);
acervo.adicionar(jogo1);

console.log("=== ACERVO INICIAL ===");
acervo.listarTodos().forEach((item) => {
  console.log(`[ID: ${item.id}] ${item.titulo} (${item.anoPublicacao}) - ${item.statusDisponibilidade}`);
});

// Empréstimo e Reserva
console.log("\n=== EMPRÉSTIMOS E RESERVAS ===");
livro1.emprestar();
livro2.reservar("Carlos Silva");
console.log(`${livro1.titulo}: ${livro1.statusDisponibilidade}`);
console.log(`${livro2.titulo}: Reservado para ${livro2.reservadoPor}`);

// Polimorfismo (Cálculo de Multa)
console.log("\n=== CÁLCULO DE MULTA (4 DIAS DE ATRASO) ===");
console.log(`Multa ${livro1.titulo}: R$ ${livro1.calcularMulta(4).toFixed(2)}`);
console.log(`Multa ${jogo1.titulo}: R$ ${jogo1.calcularMulta(4).toFixed(2)}`);

// Filtro com Utility Type Partial
console.log("\n=== ITENS DISPONÍVEIS ===");
const disponiveis = acervo.filtrar({ emprestado: false });
disponiveis.forEach((item) => console.log(`- ${item.titulo}`));

// Exceções e Validações
console.log("\n=== TESTE DE EXCEÇÕES ===");
try {
  livro1.emprestar();
} catch (error) {
  if (error instanceof Error) {
    console.error("Erro esperado (empréstimo duplicado):", error.message);
  }
}

try {
  acervo.buscarPorId(99);
} catch (error) {
  if (error instanceof ItemNaoEncontradoError) {
    console.error("Erro esperado (busca inválida):", error.message);
  }
}