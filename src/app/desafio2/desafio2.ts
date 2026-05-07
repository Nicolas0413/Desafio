import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { DataService, Produto } from '../data.service';


@Component({
  selector: 'app-desafio2',
  templateUrl: 'desafio2.html',
  styleUrls: ['desafio2.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent]
})


export class desafioComponent2 {

    listando_produtos: boolean = false
    listando_tarefas: boolean = false
    formatarpreco(valor: number){
        return(`R$ ${valor.toFixed(2)}`)
    }

    constructor(
        public dataService: DataService,
        private router: Router
    ) {}

    cadastrar_produto() {
        let id = this.dataService.Produtos.length + 1;
        let nome = prompt("Nome do produto:");
        let preco = Number(prompt("Preço do produto:"));
        let estoque = Number(prompt("Quantidade em estoque:"));

        let novoProduto: Produto = { id, nome: nome!, preco, estoque };
        
        this.dataService.Produtos.push(novoProduto);
        this.dataService.salvarDados(); 
    }

    marcar_tarefa_concluida() {
        let id = Number(prompt("Digite o ID da tarefa:"));
        let tarefa = this.dataService.Tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.concluida = true;
            this.dataService.salvarDados();
        }
    }

    ordenando_por_prioridade: boolean = false
    ordenar_por_prioridade() {
        const pesos = { alta: 3, media: 2, baixa: 1 };
        return [...this.dataService.Tarefas].sort((a, b) => pesos[b.prioridade] - pesos[a.prioridade]);
    }

    ir_para(onde: string) { 
        this.router.navigateByUrl(onde); 
    }
}