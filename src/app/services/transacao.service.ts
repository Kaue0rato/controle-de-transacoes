import { Injectable } from '@angular/core';
import { Transacao } from '../models/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private transacoes: Transacao[] = [];

  listar(): Transacao[] {
    return this.transacoes;
  }

  adicionar(transacao: Transacao): void {
    this.transacoes.push(transacao);
  }

  remover(id: number): void {
    this.transacoes = this.transacoes.filter(
      transacao => transacao.id !== id
    );
  }
}
