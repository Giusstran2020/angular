import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { post } from '../../posts/postlis/post.model';
import { project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})
export class ProjectlistComponent implements OnInit, OnDestroy {
  projects:project[] =[];
  private projectSub: Subscription;

  constructor(public ps:ProjectService) { }

  ngOnInit(): void {
    this.projects = this.ps.getAll()
    this.projectSub = this.ps.getUpdateListner().subscribe((projects:project[])=>{
      this.projects = projects;
    })
  }
  ngOnDestroy() {
    this.projectSub.unsubscribe();
  }
}
