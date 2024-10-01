import { Routes } from '@angular/router';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WhyadoptComponent } from './pages/whyadopt/whyadopt.component';
import { PetsComponent } from './pages/pets/pets.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:LayoutMainComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            },
            {
                path:'About',
                component:AboutComponent
            },
            {
                path:'Why',
                component:WhyadoptComponent
            },
            {
                path:'Pets',
                component:PetsComponent
            },
            {
                path:'Contact',
                component:ContactComponent
            }
        ]
    }
];
