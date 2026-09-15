import { Component, OnInit } from '@angular/core';
import { Transacao } from '../../models/transacao';
import { TransacaoService } from '../../services/transacao.service';

@Component({
  selector: 'app-transacao-list',
  imports: [],
  templateUrl: './transacao-list.html',
  styleUrl: './transacao-list.css'
})
export class TransacaoList implements OnInit {

  transacoes: Transacao[] = [];

  constructor(
    private transacaoService: TransacaoService
  ) {}

  ngOnInit(): void {
    this.carregarTransacoes();
  }

  carregarTransacoes(): void {
    this.transacoes = this.transacaoService.listar();
  }
}