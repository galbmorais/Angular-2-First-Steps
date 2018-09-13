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
                        }).catch(err => {
                            console.log(err);
                        });
                }       
            });  
    }
}