import { Component } from '@angular/core';
import { TransacaoForm } from './components/transacao-form/transacao-form';
import { TransacaoList } from './components/transacao-list/transacao-list';

@Component({
  selector: 'app-root',
  imports: [
    TransacaoForm,
    TransacaoList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}