import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AddPersonComponent } from './component/add-person/add-person.component';
import { HomeComponent } from './component/home/home.component';
import { PersonComponent } from './component/person/person.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'person', component: PersonComponent },
  { path: 'addPerson', component:  AddPersonComponent},
  { path: '**', redirectTo: 'home'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
