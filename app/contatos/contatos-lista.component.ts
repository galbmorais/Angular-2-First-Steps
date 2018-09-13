import {Component , OnInit} from '@angular/core';


import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html',
    styleUrls:[]
})

export class ContatosListaComponent implements OnInit {

    contatos: Contato[];

    constructor(private ContatoService: ContatoService) {}

    ngOnInit(): void {
        this.ContatoService.getContatos()
            .then((contatos : Contato []) => {
                this.contatos = contatos;
            }).catch( err => {
                console.log('Aconteceu erro: ' , err);
            });
    }
}