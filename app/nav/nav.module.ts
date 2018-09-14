import './../util/rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContatosModule } from './../contatos/contatos.module';
import { Observable } from 'rxjs/Observable';


@NgModule({

    imports:[
        AppRoutingModule,
        BrowserModule,
        ContatosModule
    ],

    declarations: [
        NavComponent
    ],
    exports: [
        NavComponent
    ]
})

export class NavModule {}
