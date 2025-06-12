import { Injectable } from '@angular/core';
import { Tag } from '../_models/tag';
import { project } from '../_models/project';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PROJECTS } from 'src/assets/data/project-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(private http: HttpClient) { }

  private scriptUrl = 'https://script.google.com/macros/s/AKfycbyOMh_ORyyEs2tElxocEsWY3psd_LntjohhkR_c5tXEZcWvVVRhhdi_b-dcU0dmg_HPdA/exec';

  submitForm(formData: any): Observable<any> {
    const body = new HttpParams()
      .set('name', formData.name)
      .set('email', formData.email)
      .set('phone', formData.phone)
      .set('message', formData.message || '');

    return this.http.post(this.scriptUrl, body, { responseType: 'text' });
  }

  projects: project[] = PROJECTS;

  getProjects() {
    return this.projects;
  };

  getProjectByID(id: number): project {
    let project = this.projects.find(project => project.id == id);
    if (!project) {
      throw new TypeError('No project found with id : ' + id);
    };
    return project;
  };

  GetProjectsByFilter(filterTags: Tag[]) {
    let filterProjects: project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;
      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      })
      if (foundAll) {
        filterProjects.push(project);
      }
    });
    return filterProjects;
  };

};
