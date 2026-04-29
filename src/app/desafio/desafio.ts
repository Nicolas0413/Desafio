import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent]
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

    listando_produtos: boolean = true
    listando_tarefas: boolean = true
    formatarpreco(valor: number){
        return(`R$ ${valor.toFixed(2)}`)
    }

///////////////////////////////////////////////////
    calculando_total_estoque: boolean = true;
    calcular_total_estoque(): number {
    let total = 0

    for (let produto of this.Produtos) {
        total += produto.preco * produto.estoque
    }

    return total
    };

////////////////////////////////////////////////////////////////////////////////////
    filtrando_tarefas: boolean = true;
    filtrar_tarefas(concluida: boolean): Tarefa[] {
    return this.Tarefas.filter(tarefa => tarefa.concluida === concluida)
    }

////////////////////////////////////////////////////////////////////////////////////
    contando_por_prioridade: boolean = true
    contagem_por_prioridade() {
        let altas = 1
        let medias = 1
        let baixas = 1

        for (let tarefa of this.Tarefas) {
            if (tarefa.prioridade === "alta")
                altas += 1
            if (tarefa.prioridade === "media")
                medias += 1
            if (tarefa.prioridade === "baixa")
                baixas += 1
        }
        return (`Tarefas de prioridade alta: ${altas}\nTarefas de prioridade media: ${medias}\nTarefas de prioridade baixa: ${baixas}`)

    }

//////////////////////////////////////////////////////////////////////////////////

    cadastrar_produto(produtos: Produto[]) {

    let id = produtos.length + 1
    let nome = prompt("Nome do produto:")
    let preco = Number(prompt("Preço do produto:"))
    let estoque = Number(prompt("Quantidade em estoque:"))

    let novoProduto: Produto = {
        id: id,
        nome: nome!,
        preco: preco,
        estoque: estoque
    }

    produtos.push(novoProduto)

    console.log("Produto cadastrado com sucesso!")
    }

//////////////////////////////////////////////////////////////////////////////////

    marcar_tarefa_concluida(tarefas: Tarefa[]) {

    let id = Number(prompt("Digite o ID da tarefa:"))

    for (let tarefa of tarefas) {
        if (tarefa.id === id) {
        tarefa.concluida = true
        console.log("Tarefa marcada como concluída!")
        return
        }
    }

    console.log("Tarefa não encontrada")
    }

//////////////////////////////////////////////////////////////////////////////////
    ordenando_por_prioridade: boolean = true
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

}