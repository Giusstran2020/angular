import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  title = 'NewApp';
  public source:any = [];
  public articles:any = [];
  @ViewChild(MatSidenav) sideNav: MatSidenav;

  constructor(private newApi : NewsService) { }

  ngOnInit(): void {
    this.newApi.initArticles()
    .subscribe((res:any)=>{
      console.log(res);
      this.articles = res.articles;
    });
    this.newApi.initSources()
    .subscribe((res:any)=>{
      console.log(res);
      this.source = res.source;
    });
  }
  getSources() {

  }

}
