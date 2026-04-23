import { Component } from "@angular/core";
import { Router } from "@angular/router";

type Produto = {
  id: number
  nome: string
  preco: number
  estoque: number
}

type Tarefa = {
  id: number
  titulo: string
  concluida: boolean
  prioridade: "baixa" | "media" | "alta"
  dataCriacao: Date
}



@Component({
  selector: 'app-desafio',
  templateUrl: 'desafio.html',
  styleUrls: ['desafio.scss'],
})


export class desafioComponent {

    Produtos: Produto[] = [
    { id: 1, nome: "Pastel", preco: 6, estoque: 6 },
    { id: 2, nome: "Pizza", preco: 7, estoque: 7 },
    { id: 3, nome: "Quiche", preco: 6, estoque: 4 },
    { id: 4, nome: "Empada", preco: 7, estoque: 8 },
    { id: 5, nome: "Empadão", preco: 16, estoque: 1 }
    ]

    Tarefas: Tarefa[] = [
    {id: 1, titulo: "Entrega_de_Empada", concluida: true, prioridade: "media", dataCriacao: new Date('2026-02-28')},
    {id: 2, titulo: "Assar_massa", concluida: false, prioridade: "baixa", dataCriacao: new Date('2026-03-02')},
    {id: 3, titulo: "rechear_Pastel", concluida: true, prioridade:  "media", dataCriacao: new Date('2026-03-03')},
    {id: 4, titulo: "Compra_batedeira", concluida: true, prioridade: "alta", dataCriacao: new Date('2026-03-03')},
    {id: 5, titulo: "Preparar_feira", concluida: false, prioridade: "alta", dataCriacao: new Date('2026-03-04')}
    ]

}