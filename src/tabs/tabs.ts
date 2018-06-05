import { Component } from '@angular/core';

import { HomePage } from '../pages/home/home';
import { DatosPage } from "../pages/datos/datos";

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {
    tab1Root = HomePage;
    tab2Root = DatosPage;

    constructor(){
        
    }
}