import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { CoinDetailComponent } from './admin/dashboard/crypto/coin-detail/coin-detail.component';
import { CoinListComponent } from './admin/dashboard/crypto/coin-list/coin-list.component';
import { CryptoComponent } from './admin/dashboard/crypto/crypto.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/dashboard/login/login.component';
import { PageComponent } from './admin/dashboard/page/page.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { SettingComponent } from './admin/dashboard/setting/setting.component';
import { HomeComponent } from './admin/home/home.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent,
    children:[
      {path:'dashboard', component: DashboardComponent},
      {path:'posts', component: PostsComponent},
      {path:'comments', component: CommentsComponent},
      {path:'login', component: LoginComponent},
      {path:'pages' , component: PageComponent},
      {path:'settings', component: SettingComponent},
      {path:'cryptos', component: CryptoComponent,
      children:[
        {path:'', redirectTo :'coin-list', pathMatch:'full'},
        {path:'coin-list', component: CoinListComponent},
        {path:'coin-detail/:id', component: CoinDetailComponent}
        ],
      },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
