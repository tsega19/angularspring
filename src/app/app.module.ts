import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentComponent,
     LoginComponent,
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
