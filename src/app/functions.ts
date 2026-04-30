import { Produto } from "./desafio/desafio";
import { Tarefa } from "./desafio/desafio";

export function salvarDados(produtos: Produto[], tarefas: Tarefa[]): void {
    localStorage.setItem('produtos', JSON.stringify(produtos));
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

export function carregarDados(): LocalStorageData{
    let produtos = JSON.parse(localStorage.getItem('produtos') || '[]')
    let tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]')

    return { Produtos: produtos, Tarefas: tarefas  }
}

export type LocalStorageData = {
    Produtos: Produto[],
    Tarefas: Tarefa[]
}