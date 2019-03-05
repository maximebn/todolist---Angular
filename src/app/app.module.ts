import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Project components :
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/api/tool-bar/tool-bar.component';
import { HomeComponent } from './components/home/home/home.component';
import { ApiComponent } from './components/api/api/api.component';


import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



// Material modules :
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



@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    HomeComponent,
    ApiComponent
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
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    FlexLayoutModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass : RequestService, multi: true,
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
