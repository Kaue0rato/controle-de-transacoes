import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transacao } from '../models/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private readonly STORAGE_KEY = 'transacoes';

  private transacoesSubject = new BehaviorSubject<Transacao[]>(
    this.carregarTransacoes()
  );

  readonly transacoes$ = this.transacoesSubject.asObservable();

  adicionar(transacao: Transacao): void {

    const transacoesAtuais = this.transacoesSubject.value;

    const novasTransacoes = [
      ...transacoesAtuais,
      transacao
    ];

    this.atualizarTransacoes(novasTransacoes);
  }

  atualizar(transacaoAtualizada: Transacao): void {

  const transacoesAtualizadas =
    this.transacoesSubject.value.map(transacao =>
      transacao.id === transacaoAtualizada.id
        ? transacaoAtualizada
        : transacao
    );

  this.atualizarTransacoes(transacoesAtualizadas);
}

  remover(id: number): void {

    const transacoesAtualizadas =
      this.transacoesSubject.value.filter(
        transacao => transacao.id !== id
      );

    this.atualizarTransacoes(transacoesAtualizadas);
  }

  private atualizarTransacoes(transacoes: Transacao[]): void {

    this.transacoesSubject.next(transacoes);

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(transacoes)
    );
  }

  private carregarTransacoes(): Transacao[] {

    const dados = localStorage.getItem(this.STORAGE_KEY);

    if (!dados) {
      return [];
    }

    try {

      return JSON.parse(dados) as Transacao[];

    } catch {

      return [];
    }
  }
}
