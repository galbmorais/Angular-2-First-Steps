import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from  '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from './contato.service';
import { Contato } from './contato.model';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})

export class ContatoDetalheComponent implements OnInit{

    contato: Contato;
    private isNew: boolean =true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location,
    ){}
    
    ngOnInit(): void {

        this.contato = new Contato (null, '', '', '');
        //console.log("OnInit");

        this.route.params.forEach((params: Params) => {
            //Utiliza-se o +params para garantir que venha somente o numero da string
            let id: number = +params ['id'];
            //console.log(id);

            if(id) {
                this.isNew = false;
                this.contatoService.getContato(id)
                .then((contato : Contato) => {
                    console.log(contato);
                    this.contato = contato;
                });
            }

        });
    }

    log(): void {
        console.log(this.contato);
    }

    onSubmit(): void {
        console.log('New? ' + this.isNew);
        let promise;

        if(this.isNew){
            //novo
            promise = this.contatoService.create(this.contato);
        }else{
            //edita
        }

        promise.then( contato => this.location.back());
    }

}