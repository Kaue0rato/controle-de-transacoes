import { Component } from '@angular/core';
import { TransacaoForm } from './components/transacao-form/transacao-form';

@Component({
  selector: 'app-root',
  imports: [TransacaoForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}