import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {

        let contatos: Contato[] = [
            {id: 1, nome: 'Gabriel M', email: 'gabrielluiz.morais@hotmail.com', telefone: '(31) 987383183'},
            {id: 2, nome: 'Gabriel L', email: 'gabrielluiz.morais@gmail.com', telefone: '(31) 987383183'},
            {id: 3, nome: 'Gabriel B', email: 'gabrielluiz.morais@gabriel.com', telefone: '(31) 987383183'},
            {id: 4, nome: 'Gabriel', email: 'gabrielluiz.morais@sga.com', telefone: '(31) 987383183'},
        ];
        return {
            'contatos' : contatos
        };
    }
}