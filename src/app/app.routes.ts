import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MySkillsComponent } from './pages/my-skills/my-skills.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'myskills',
        component:MySkillsComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
];
