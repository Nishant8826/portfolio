import { Injectable } from '@angular/core';
import { Tag } from '../_models/tag';
import { project } from '../_models/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(private http: HttpClient) { }

  private scriptUrl = 'https://sheet.best/api/sheets/de0c0ee7-3e6e-414b-8128-7d344591b9aa';

  saveFormData(formData: any): Observable<any> {
    return this.http.post(this.scriptUrl, formData);
  }

  projects: project[] = [
    { id: 0, name: "Angular Quiz", pictures: ["../../assets/quiz-1.png", "../../assets/quiz-2.png", "../../assets/quiz-3.png", "../../assets/quiz-4.png"], projectLink: "https://github.com/Nishant8826/QuizByAngular.git", liveLink: "https://angular-quiz-seven.vercel.app/welcome", summary: "Small Quiz Apllication developed in Angular 15 and Boostrap for UI", description: "9 Basic Questions that are based on Angualar Framework which can score you 10 points on each coorect answers with the time limit od 60 seconds.To make the quiz more interesting, 10 points will deduct from your total scores. In the end, you can view the score-card which will record Attempted questions, Correct, Wrong and Total Scores", tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT] },
    { id: 1, name: "To Do", pictures: ["../../assets/to-do.png"], projectLink: "https://github.com/Nishant8826/Angular-todo.git", liveLink: "https://angular-todo-nine.vercel.app/", summary: "TO DO list project build in Angular 15 and Boostrap for UI", description: "Tasks will store in Local Storage so that tasks won't get deleted when user reload the page, Task only can removed by the user.", tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT] },
    { id: 2, name: "Daily Goals", pictures: ["../../assets/daily-goals.png"], projectLink: "https://github.com/Nishant8826/reactProjects/tree/DailyGoals", liveLink: "https://react-daily-goals.vercel.app/", summary: "Project to Set your Goals in your Daily Task Bucket", description: "Goals will store in Local Storage so that goals won't get deleted when user reload the page, Task only can removed by the user.", tags: [Tag.REACT, Tag.CSS] },
    { id: 3, name: "Techy Star", pictures: ["../../assets/techy-1.png", "../../assets/techy-2.png", "../../assets/techy-3.png", "../../assets/techy-4.png", "../../assets/techy-5.png"], projectLink: "https://github.com/Nishant8826/reactProjects/tree/techyStar", liveLink: "https://reactone-phi.vercel.app/", summary: "Sample Page For Displaying Core features of a Website.", description: "Website Page for displaying Home/about/contact/services page of an Organization. Some cool Animation and carousel are also embeded inside the page", tags: [Tag.REACT, Tag.CSS] },
    { id: 4, name: "Vedio Hub", pictures: ["../../assets/vedio-hub-1.png", "../../assets/vedio-hub-2.png"], projectLink: "https://github.com/Nishant8826/reactProjects/tree/vedioHub", liveLink: "https://react-vedio-hub-anime.vercel.app/", summary: "To upload and Play some Vedios, A static Youtube.", description: "Vedios are being played in Vedio-Hub project.", tags: [Tag.REACT, Tag.CHAKRAUI] }
  ];

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
