import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transacao-form',
  imports: [FormsModule],
  templateUrl: './transacao-form.html',
  styleUrl: './transacao-form.css'
})

export class TransacaoForm {
  descricao = '';
  valor = 0;
  tipo: 'receita' | 'despesa' = 'receita';
  data = '';
}