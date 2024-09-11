import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from 'src/app/_models/project';
import { Tag } from 'src/app/_models/tag';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: any = [];
  isCollapsed: boolean = true;
  filtering: boolean = false;
  //Tags 
  python: boolean = false;
  nodejs: boolean = false;
  angular: boolean = false;
  react: boolean = false;
  css: boolean = false;
  bootstrap: boolean = false;
  javascript: boolean = false;
  typescript: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Portfolio');
  };

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  };

  filter() {
    let filterTags: Tag[] = [];

    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP);
    }
    if (this.css) {
      filterTags.push(Tag.CSS);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
    if (filterTags.length >= 1) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }
  }

  resetFilter() {
    this.python = false;
    this.nodejs = false;
    this.angular = false;
    this.react = false;
    this.css = false;
    this.bootstrap = false;
    this.javascript = false;
    this.typescript = false;

    this.projects = this.projectService.getProjects();
    this.filtering = false;
  }


}
