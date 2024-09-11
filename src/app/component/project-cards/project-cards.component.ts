import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { project } from 'src/app/_models/project';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent {
  @Input() project = {} as project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openModalWithComponent() {
    const modelOptions: ModalOptions = {
      class: 'modal-lg',
      initialState:{
        project : this.project
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent , modelOptions);
  }

}
