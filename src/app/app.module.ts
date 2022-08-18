import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './admin/home/home.component';

import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider'
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { NgChartsModule } from 'ng2-charts';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './admin/dashboard/login/login.component';
import { PostlisComponent } from './admin/dashboard/posts/postlis/postlis.component';
import { PostsService } from './admin/dashboard/posts/postlis/posts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './admin/dashboard/page/page.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingComponent } from './admin/dashboard/setting/setting.component';
import { ProjectComponent } from './admin/dashboard/project/project.component';
import { ProjectlistComponent } from './admin/dashboard/comments/projectlist/projectlist.component';
import { ProjectService } from './admin/dashboard/comments/projectlist/project.service';
import { CommonModule } from '@angular/common';
import { CryptoComponent } from './admin/dashboard/crypto/crypto.component';
import { CoinListComponent } from './admin/dashboard/crypto/coin-list/coin-list.component';
import { CoinDetailComponent } from './admin/dashboard/crypto/coin-detail/coin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    PostsComponent,
    CommentsComponent,
    LoginComponent,
    PostlisComponent,
    PageComponent,
    SettingComponent,
    ProjectComponent,
    ProjectlistComponent,
    CryptoComponent,
    CoinListComponent,
    CoinDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    MatDividerModule,
    HttpClientModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgChartsModule
  ],

  providers: [PostsService, ProjectService],
  bootstrap: [AppComponent]
})

export class AppModule { }
