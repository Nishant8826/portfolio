import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featureProject: any = {};
  myInterval = 1500;
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Portfolio - Home')
  }

  ngOnInit(): void {
    this.featureProject = this.projectService.getProjectByID(4);
  }

}
