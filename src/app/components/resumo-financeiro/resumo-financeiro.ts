import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Transacao } from '../../models/transacao';
import { TransacaoService } from '../../services/transacao.service';

@Component({
  selector: 'app-resumo-financeiro',
  imports: [AsyncPipe],
  templateUrl: './resumo-financeiro.html',
  styleUrl: './resumo-financeiro.css'
})

export class ResumoFinanceiro {

  transacoes$: Observable<Transacao[]>;

  receitas$: Observable<number>;
  despesas$: Observable<number>;
  saldo$: Observable<number>;

  constructor(
    private transacaoService: TransacaoService
  ) {

    this.transacoes$ = this.transacaoService.transacoes$;

    this.receitas$ = this.transacoes$.pipe(
      map(transacoes =>
        transacoes
          .filter(transacao => transacao.tipo === 'receita')
          .reduce((total, transacao) => total + transacao.valor, 0)
      )
    );

    this.despesas$ = this.transacoes$.pipe(
      map(transacoes =>
        transacoes
          .filter(transacao => transacao.tipo === 'despesa')
          .reduce((total, transacao) => total + transacao.valor, 0)
      )
    );

    this.saldo$ = this.transacoes$.pipe(
      map(transacoes =>
        transacoes.reduce((saldo, transacao) => {
          if (transacao.tipo === 'receita') {
            return saldo + transacao.valor;
          }

          return saldo - transacao.valor;
        }, 0)
      )
    );
  }

}