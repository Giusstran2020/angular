import { Injectable } from '@angular/core';
import { project } from './project.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects:project[] = [];
  private projectUpdate = new Subject<project[]>();

  getUpdateListner(){
    return this.projectUpdate.asObservable();
  }
  constructor() { }
  addProject(title:string, content:string, datetime:any){
    const project:project={title:title,content:content,dateTime: new Date()};
    this.projects.push(project)
    this.projectUpdate.next([...this.projects]);
  }
  getAll(){
    return [...this.projects];
  }
}
