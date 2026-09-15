import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TransacaoService } from '../../services/transacao.service';

@Component({
  selector: 'app-transacao-list',
  imports: [AsyncPipe],
  templateUrl: './transacao-list.html',
  styleUrl: './transacao-list.css'
})
export class TransacaoList {

  transacoes$;

  constructor(
    private transacaoService: TransacaoService
  ) {
    this.transacoes$ = this.transacaoService.transacoes$;
  }

}