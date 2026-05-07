import { Injectable } from '@angular/core';

export type Produto = {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
};

export type Tarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
  prioridade: "baixa" | "media" | "alta";
  dataCriacao: Date;
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public Produtos: Produto[] = [];
  public Tarefas: Tarefa[] = [];

  constructor() {
    this.carregarDados();
  }

  salvarDados(): void {
    localStorage.setItem('produtos', JSON.stringify(this.Produtos));
    localStorage.setItem('tarefas', JSON.stringify(this.Tarefas));
  }

  carregarDados(): void {
    const produtosSalvos = localStorage.getItem('produtos');
    const tarefasSalvas = localStorage.getItem('tarefas');

    this.Produtos = produtosSalvos ? JSON.parse(produtosSalvos) : [
      { id: 1, nome: "Pastel", preco: 6, estoque: 6 },
      { id: 2, nome: "Pizza", preco: 7, estoque: 7 },
      { id: 3, nome: "Quiche", preco: 6, estoque: 4 },
      { id: 4, nome: "Empada", preco: 7, estoque: 8 },
      { id: 5, nome: "Empadão", preco: 16, estoque: 1 }
    ];

    this.Tarefas = tarefasSalvas ? JSON.parse(tarefasSalvas) : [
      {id: 1, titulo: "Entrega de Empada", concluida: true, prioridade: "media", dataCriacao: new Date('2026-02-28')},
      {id: 2, titulo: "Assar massa", concluida: false, prioridade: "baixa", dataCriacao: new Date('2026-03-02')},
      {id: 3, titulo: "rechear Pastel", concluida: true, prioridade: "media", dataCriacao: new Date('2026-03-03')}
    ];
  }
}