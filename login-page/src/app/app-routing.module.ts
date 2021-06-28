import { ResetComponent } from './views/reset/reset.component';
import { SimpleLoginComponent } from './views/simple-login/simple-login.component';
import { LoginGuard } from './../guard/login/login.guard';
import { SettingPasswordComponent } from './views/setting-password/setting-password.component';
import { MainComponent } from './views/main/main.component';
import { LoginComponent } from './views/login/login.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard], data: { title: '會員登入' } },
  { path: 'simplelogin', component: SimpleLoginComponent, canActivate: [LoginGuard], data: { title: '設定簡易登入' } },
  { path: 'settings', component: SettingsComponent, data: { title: '設定使用者名稱' } },
  { path: 'settingpassword', component: SettingPasswordComponent, data: { title: '設定新密碼' } },
  { path: 'reset', component: ResetComponent, data: { title: '忘記使用者名稱或密碼' } },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard], data: { title: '系統首頁' } },
  { path: '', redirectTo: 'login', pathMatch: 'full', data: { title: '首頁' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
