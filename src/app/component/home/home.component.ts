import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectedCategory: string = 'frontend';
  skills = [
    // Frontend
    { name: 'HTML', icon: 'fab fa-html5', color: 'text-danger', category: 'frontend' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-primary', category: 'frontend' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-warning', category: 'frontend' },
    { name: 'jQuery', icon: 'fab fa-js-square', color: 'text-info', category: 'frontend' },
    { name: 'React', icon: 'fab fa-react', color: 'text-info', category: 'frontend' },
    { name: 'React Native', icon: 'fab fa-react', color: 'text-primary', category: 'frontend' },
    { name: 'Angular', icon: 'fab fa-angular', color: 'text-danger', category: 'frontend' },
    { name: 'Ionic', icon: 'fas fa-mobile-alt', color: 'text-secondary', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-success', category: 'backend' },
    { name: 'SQL', icon: 'fas fa-database', color: 'text-dark', category: 'backend' },
    { name: 'Knex.js', icon: 'fas fa-code', color: 'text-dark', category: 'backend' },
    { name: 'AWS', icon: 'fab fa-aws', color: 'text-warning', category: 'backend' },
    { name: 'Express', icon: 'fas fa-server', color: 'text-dark', category: 'backend' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: 'text-success', category: 'backend' },
    { name: 'Mongoose', icon: 'fas fa-project-diagram', color: 'text-dark', category: 'backend' },
    { name: 'REST APIs', icon: 'fas fa-plug', color: 'text-dark', category: 'backend' },

    // Other
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-danger', category: 'other' },
    { name: 'Mercurial', icon: 'fas fa-code-branch', color: 'text-danger', category: 'other' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-primary', category: 'other' },
    { name: 'MS Office', icon: 'fas fa-file-word', color: 'text-primary', category: 'other' },
    { name: 'Postman', icon: 'fas fa-paper-plane', color: 'text-warning', category: 'other' },
    { name: 'Redis', icon: 'fas fa-database', color: 'text-danger', category: 'other' },


  ];



  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Portfolio - Home')
  }

  get filteredSkills() {
    if (this.selectedCategory === 'other') {
      return this.skills.filter((skill) => skill.category === 'other');
    }
    return this.skills.filter((skill) => skill.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

}
