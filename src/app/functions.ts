import { Produto } from "./desafio/desafio";
import { Tarefa } from "./desafio/desafio";

export function salvarDados(produtos: Produto[], tarefas: Tarefa[]): void {
    localStorage.setItem('produtos', JSON.stringify(produtos));
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
