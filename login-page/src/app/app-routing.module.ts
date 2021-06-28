import { SettingPasswordComponent } from './views/setting-password/setting-password.component';
import { MainComponent } from './views/main/main.component';
import { LoginComponent } from './views/login/login.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: '會員登入' } },
  { path: 'settings', component: SettingsComponent, data: { title: '設定使用者名稱' } },
  { path: 'settingpassword', component: SettingPasswordComponent, data: { title: '設定新密碼' } },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard], data: { title: '系統首頁' } },
  { path: '', redirectTo: 'login', pathMatch: 'full', data: { title: '首頁' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
