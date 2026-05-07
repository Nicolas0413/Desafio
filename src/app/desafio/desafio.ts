import { Component, ɵunwrapSafeValue } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { DataService, Tarefa } from '../data.service';


@Component({
  selector: 'app-desafio',
  templateUrl: 'desafio.html',
  styleUrls: ['desafio.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent]
})


export class desafioComponent {
    constructor(
        public dataService: DataService,
        private router: Router
    ) {}
    
    listando_produtos: boolean = false
    listando_tarefas: boolean = false
    formatarpreco(valor: number){
        return(`R$ ${valor.toFixed(2)}`)
    }

///////////////////////////////////////////////////
    calculando_total_estoque: boolean = false;
    calcular_total_estoque(): number {
        return this.dataService.Produtos.reduce((acc, p) => acc + (p.preco * p.estoque), 0);
    };

////////////////////////////////////////////////////////////////////////////////////
    filtrando_tarefas: boolean = false;
    filtrando_tarefas2: boolean = false;
    filtrar_tarefas(concluida: boolean): Tarefa[] {
    return this.dataService.Tarefas.filter(tarefa => tarefa.concluida === concluida)
    }

////////////////////////////////////////////////////////////////////////////////////

    contando_por_prioridade: boolean = false
    contagem_por_prioridade() {
        let altas = 0
        let medias = 0
        let baixas = 0

        for (let tarefa of this.dataService.Tarefas) {
            if (tarefa.prioridade === "alta")
                altas += 1
            if (tarefa.prioridade === "media")
                medias += 1
            if (tarefa.prioridade === "baixa")
                baixas += 1
        }
        return (`Tarefas de prioridade alta: ${altas}</br></br>
            
            Tarefas de prioridade media: ${medias}</br></br>
            
            Tarefas de prioridade baixa: ${baixas}`)

    }

    
    ir_para(onde: string) { 
        this.router.navigateByUrl(onde); 
    }
    
}