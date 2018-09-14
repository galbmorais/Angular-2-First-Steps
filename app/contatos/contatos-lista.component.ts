import {Component , OnInit} from '@angular/core';


import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { DialogService } from './../dialog.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html',
    styleUrls:[]
})

export class ContatosListaComponent implements OnInit {

    contatos: Contato[];
    mensagem: {};
    classesCss: {};

    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService
        ) {}

    ngOnInit(): void {
        this.contatoService.getContatos()
            .then((contatos : Contato []) => {
                this.contatos = contatos;
            }).catch( err => {
                console.log('Aconteceu erro: ' , err);
            });
    }

    onDelete( contatoToRemove : Contato): void{
        //console.log('ONDelete');
        //console.log(contato);
        this.dialogService
            .confirm('Deseja Remover o contato ' + contatoToRemove.nome + ' ?')
            .then((canDelete: boolean) => {
                if(canDelete){
                    this.contatoService
                        .delete(contatoToRemove)
                        .then(() => {
                            this.contatos = this.contatos.filter(contato => contato.id != contatoToRemove.id);
                            this.mostrarMensagem({
                                tipo: 'success',
                                titulo: 'Sucesso !',
                                mensagem: 'Contato removido !'
                            });
                        }).catch(err => {
                            this.mostrarMensagem({
                                tipo:  'danger',
                                titulo: 'Erro !',
                                mensagem: err
                            });
                            //console.log(err);
                        });
                }       
            });  
    }

    private mostrarMensagem(mensagem: {tipo: string, titulo:string,  mensagem: string}):void {

        this.mensagem = mensagem;
        this.montarMensagem(mensagem.tipo);
        setTimeout(() => {
            this.mensagem = undefined;
        },2000)

    }
    private montarMensagem(tipo : string): void {
        this.classesCss = {
            'alert': true
        };
        this.classesCss ['alert-' + tipo] = true;
    }
}