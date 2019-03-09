import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './components/api/api/api.component';
import { HomeComponent } from './components/home/home/home.component';
import { TachesListDateComponent } from './components/taches-list-date/taches-list-date.component';
import { TachesListProjetComponent } from './components/taches-list-projet/taches-list-projet.component';
import * as moment from 'moment';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'api',
    component: ApiComponent,
    children: [

      {
        path: 'todayList',
        component: TachesListDateComponent,
        data: { title: 'Aujourd\'hui', page: 'todayList', dates: [ 
          {date: moment().format('YYYY-MM-DD')}
        ]}
      },
      {
        path: 'weekList',
        component: TachesListDateComponent,
        data: { title: '7 prochains jours', page: 'weekList', dates: [
          {date: moment().format('YYYY-MM-DD')},
          {date: moment().add(1, 'days').format('YYYY-MM-DD')},
           {date: moment().add(2, 'days').format('YYYY-MM-DD')},
           {date: moment().add(3, 'days').format('YYYY-MM-DD')},
           {date: moment().add(4, 'days').format('YYYY-MM-DD')},
           {date: moment().add(5, 'days').format('YYYY-MM-DD')},
           {date: moment().add(6, 'days').format('YYYY-MM-DD')}
        ]}
      },
      {
        path: '',
        redirectTo: 'todayList',
        pathMatch: 'full'
      },
      {
        path: 'allTache',
        component: TachesListDateComponent,
        data: { title: 'Toutes vos taches', page: 'findAll', dates: [ ]}
      },
      {
        path: 'projet/:id/titre/:titre',
        component: TachesListProjetComponent,
        data: { title: '', page: 'findOne'}
      }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
