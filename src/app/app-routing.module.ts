import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TachesListDateComponent } from './components/taches-list-date/taches-list-date.component';
import { TachesListProjetComponent } from './components/taches-list-projet/taches-list-projet.component';


const routes: Routes = [
  {
    path: 'todayList',
    component: TachesListDateComponent,
    data: { title: 'Aujourd\'hui', page: 'todayList'}
  },
  {
    path: 'weekList',
    component: TachesListDateComponent,
    data: { title: '7 prochains jours', page: 'weekList'}
  },
  {
    path: '',
    redirectTo: '/todayList',
    pathMatch: 'full'
  },
  {
    path: 'allTache',
    component: TachesListDateComponent,
    data: { title: 'Toutes vos taches', page: 'findAll'}
  },
  {
    path: 'projet/:id/titre/:titre',
    component: TachesListProjetComponent,
    data: { title: '', page: 'findOne'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
