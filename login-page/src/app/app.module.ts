import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './views/settings/settings.component';
import { LoginComponent } from './views/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AccInputDirective } from './directives/acc-input.directive';
import { MainComponent } from './views/main/main.component';
import { SettingPasswordComponent } from './views/setting-password/setting-password.component';
import { ResetComponent } from './views/reset/reset.component';
import { SimpleLoginComponent } from './views/simple-login/simple-login.component';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    SettingsComponent,
    LoginComponent,
    AccInputDirective,
    MainComponent,
    SettingPasswordComponent,
    ResetComponent,
    SimpleLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    FlexLayoutModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [MatInputModule,
    MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
