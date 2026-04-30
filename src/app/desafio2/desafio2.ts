import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { salvarDados } from '../functions';
import { carregarDados } from '../functions';

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
  selector: 'app-desafio2',
  templateUrl: 'desafio2.html',
  styleUrls: ['desafio2.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent]
})


export class desafioComponent2 {


    Produtos: Produto[] = [
    { id: 1, nome: "Pastel", preco: 6, estoque: 6 },
    { id: 2, nome: "Pizza", preco: 7, estoque: 7 },
    { id: 3, nome: "Quiche", preco: 6, estoque: 4 },
    { id: 4, nome: "Empada", preco: 7, estoque: 8 },
    { id: 5, nome: "Empadão", preco: 16, estoque: 1 }
    ]

    Tarefas: Tarefa[] = [
    {id: 1, titulo: "Entrega de Empada", concluida: true, prioridade: "media", dataCriacao: new Date('2026-02-28')},
    {id: 2, titulo: "Assar massa", concluida: false, prioridade: "baixa", dataCriacao: new Date('2026-03-02')},
    {id: 3, titulo: "rechear Pastel", concluida: true, prioridade:  "media", dataCriacao: new Date('2026-03-03')},
    {id: 4, titulo: "Compra batedeira", concluida: true, prioridade: "alta", dataCriacao: new Date('2026-03-03')},
    {id: 5, titulo: "Preparar feira", concluida: false, prioridade: "alta", dataCriacao: new Date('2026-03-04')}
    ]

    listando_produtos: boolean = false
    listando_tarefas: boolean = false
    formatarpreco(valor: number){
        return(`R$ ${valor.toFixed(2)}`)
    }


    ngOnInit(){
        carregarDados
    }

    cadastrar_produto() {

    let id = this.Produtos.length + 1
    let nome = prompt("Nome do produto:")
    let preco = Number(prompt("Preço do produto:"))
    let estoque = Number(prompt("Quantidade em estoque:"))

    

    let novoProduto: Produto = {
        id: id,
        nome: nome!,
        preco: preco,
        estoque: estoque
    }
    
    this.Produtos.push(novoProduto)

    console.log("Produto cadastrado com sucesso!")
    salvarDados
    }

    marcar_tarefa_concluida() {

    let id = Number(prompt("Digite o ID da tarefa:"))

    for (let tarefa of this.Tarefas) {
        if (tarefa.id === id) {
        tarefa.concluida = true
        console.log("Tarefa marcada como concluída!")
        return
        }
    }

    console.log("Tarefa não encontrada")
    }

    ordenando_por_prioridade: boolean = false
    ordenar_por_prioridade(): Tarefa[] {

    return this.Tarefas.sort((a, b) => {

        const prioridade = {
        alta: 3,
        media: 2,
        baixa: 1
        }

        return prioridade[b.prioridade] - prioridade[a.prioridade]

    })
    }

    ir_para(onde_ir: string) {
        window.location.href = onde_ir
    }
}