import { HttpErrorInterceptorService } from './shared/services/http-error-interceptor.service';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

// Project components :
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/api/tool-bar/tool-bar.component';
import { HomeComponent } from './components/home/home/home.component';
import { ApiComponent } from './components/api/api/api.component';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



// Material modules :
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { RequestService } from './shared/services/request.service';
import {MatDialogModule} from '@angular/material/dialog';
import { RegisterDialogComponent } from './components/home/register-dialog/register-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginDialogComponent } from './components/home/login-dialog/login-dialog.component';

import { TachesListDateComponent } from './components/taches-list-date/taches-list-date.component';
import { TachesListProjetComponent } from './components/taches-list-projet/taches-list-projet.component';
import { ProjetsListComponent } from './components/projets-list/projets-list.component';
import { TacheComponent } from './components/tache/tache.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';

import { AddingTaskComponent } from './components/api/adding-task/adding-task.component';
import { MatNativeDateModule } from '@angular/material/core';

import {MatRadioModule} from '@angular/material/radio';
import { AjoutProjetComponent } from './components/ajout-projet/ajout-projet.component';
import { UnsubscribeDialogComponent } from './components/api/unsubscribe-dialog/unsubscribe-dialog.component';
import { PerformanceComponent } from './components/api/performance/performance.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    HomeComponent,
    ApiComponent,
    TachesListDateComponent,
    TachesListProjetComponent,
    ProjetsListComponent,
    TacheComponent,
    AjoutProjetComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
    AddingTaskComponent,
    UnsubscribeDialogComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    FlexLayoutModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: 'var(--background-color)',
      innerStrokeColor: 'var(--background-color)',
      animationDuration: 3000
    }),
  ],
  providers: [
    CookieService,
      {
       provide: HTTP_INTERCEPTORS, useClass : AuthInterceptorService, multi: true,
     },
     {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
    ],
  entryComponents: [RegisterDialogComponent, LoginDialogComponent, UnsubscribeDialogComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
