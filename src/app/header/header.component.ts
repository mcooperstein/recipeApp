import { Component, onInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

@export class HeaderComponent implements onInit{

@Output() featureSelected = new EventEmitter<string>();

onSelect(feature:string){
    this.featureSelected.emit(feature);
}

constructor() { }

ngOnInit() {
}
}
