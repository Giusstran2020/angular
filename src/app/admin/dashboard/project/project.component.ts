import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../comments/projectlist/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {


  constructor(private ps:ProjectService) { }


  ngOnInit(): void {
  }
  onProjectData(form:NgForm){
    if(!form.invalid){
    this.ps.addProject(form.value.title, form.value.content, form.value.dateTime);
    form.resetForm()
    }else{
      return
    }
  }
}
