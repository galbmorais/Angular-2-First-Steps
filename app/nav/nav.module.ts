import {NgModule} from '@angular/core';

import { NavComponent } from './nav.component';
import { AppRoutingModule } from '../app-routing.module'

@NgModule({

    imports:[
        AppRoutingModule 
    ],

    declarations: [
        NavComponent
    ],
    exports: [
        NavComponent
    ]
})

export class NavModule {}