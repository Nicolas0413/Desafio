import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { desafioComponent } from '../desafio/desafio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [desafioComponent ,IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HomePage {
  constructor() {}
}
