import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transacao } from '../models/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private transacoesSubject = new BehaviorSubject<Transacao[]>([]);

  transacoes$ = this.transacoesSubject.asObservable();

  adicionar(transacao: Transacao): void {
    const transacoesAtuais = this.transacoesSubject.value;

    this.transacoesSubject.next([
      ...transacoesAtuais,
      transacao
    ]);
  }

  remover(id: number): void {
    const transacoesAtualizadas = this.transacoesSubject.value.filter(
      transacao => transacao.id !== id
    );

    this.transacoesSubject.next(transacoesAtualizadas);
  }
}
