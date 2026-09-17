import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Transacao } from '../../models/transacao';
import { TransacaoService } from '../../services/transacao.service';

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

  constructor(
    private transacaoService: TransacaoService
  ) {}

  cadastrar(form: NgForm): void {

  if (form.invalid) {
    return;
  }

  const novaTransacao: Transacao = {
    id: Date.now(),
    descricao: this.descricao,
    valor: this.valor,
    tipo: this.tipo,
    data: this.data
  };

  this.transacaoService.adicionar(novaTransacao);

  console.log('Transação cadastrada:', novaTransacao);

  form.resetForm({
    descricao: '',
    valor: 0,
    tipo: 'receita',
    data: ''
  });
}
}