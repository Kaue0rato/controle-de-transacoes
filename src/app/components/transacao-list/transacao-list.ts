import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from '../../models/transacao';
import { TransacaoService } from '../../services/transacao.service';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transacao-list',
  imports: [AsyncPipe],
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
