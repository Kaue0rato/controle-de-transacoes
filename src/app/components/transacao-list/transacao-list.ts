
import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Transacao } from '../../models/transacao';
import { TransacaoService } from '../../services/transacao.service';
import { Badge } from '../ui/badge/badge';

@Component({
  selector: 'app-transacao-list',
  imports: [
    AsyncPipe,
    Badge
  ],
  templateUrl: './transacao-list.html',
  styleUrl: './transacao-list.css'
})
export class TransacaoList {

  transacoes$: Observable<Transacao[]>;

  @Output() editarTransacao = new EventEmitter<Transacao>();

  constructor(
    private transacaoService: TransacaoService
  ) {
    this.transacoes$ = this.transacaoService.transacoes$;
  }

  editar(transacao: Transacao): void {
    this.editarTransacao.emit(transacao);
  }

  remover(id: number): void {
    this.transacaoService.remover(id);
  }
}