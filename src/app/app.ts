import { Component } from '@angular/core';

import { TransacaoForm } from './components/transacao-form/transacao-form';
import { TransacaoList } from './components/transacao-list/transacao-list';
import { ResumoFinanceiro } from './components/resumo-financeiro/resumo-financeiro';

import { Transacao } from './models/transacao';

@Component({
  selector: 'app-root',
  imports: [
    TransacaoForm,
    TransacaoList,
    ResumoFinanceiro
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  transacaoSelecionada: Transacao | null = null;

  editarTransacao(transacao: Transacao): void {
    this.transacaoSelecionada = transacao;
  }

}