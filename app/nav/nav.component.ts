import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav',
    templateUrl: 'nav.component.html',
    styleUrls:[]
})

export class NavComponent implements OnInit{

    isNew: boolean;

    ngOnInit(){
        this.isNew = false;
    }

    newSituation(stats: string ):void{
        if(!this.isNew && stats === 'novo') this.isNew = true
        else this.isNew = false;
    }
}