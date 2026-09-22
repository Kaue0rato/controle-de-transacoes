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

  editando = false;
  idEditando: number | null = null;

  constructor(
    private transacaoService: TransacaoService
  ) {}

  editar(transacao: Transacao): void {

    this.idEditando = transacao.id;

    this.descricao = transacao.descricao;
    this.valor = transacao.valor;
    this.tipo = transacao.tipo;
    this.data = transacao.data;

    this.editando = true;
  }

  salvar(form: NgForm): void {

  if (form.invalid) {
    return;
  }

  if (this.editando && this.idEditando !== null) {

    const transacaoAtualizada: Transacao = {
      id: this.idEditando,
      descricao: this.descricao,
      valor: this.valor,
      tipo: this.tipo,
      data: this.data
    };

    this.transacaoService.atualizar(transacaoAtualizada);

  } else {

    const novaTransacao: Transacao = {
      id: Date.now(),
      descricao: this.descricao,
      valor: this.valor,
      tipo: this.tipo,
      data: this.data
    };

    this.transacaoService.adicionar(novaTransacao);
  }

  this.cancelarEdicao(form);
  }
  cancelarEdicao(form: NgForm): void {

  this.editando = false;
  this.idEditando = null;

  form.resetForm({
    descricao: '',
    valor: 0,
    tipo: 'receita',
    data: ''
  });
}}

