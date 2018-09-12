import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContatosModule } from './contatos/contatos.module';
import { NavModule } from './nav/nav.module';

@NgModule({
    imports: [
        BrowserModule,
        ContatosModule,
        NavModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}