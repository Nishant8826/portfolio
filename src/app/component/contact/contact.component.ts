import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showForm: boolean = true;
  formData: any = {}; // Initialize formData
  loading = false;
  formSubmittedSuccessfully = false;
  errorMessage = '';

  constructor(private titleService: Title, private project: ProjectsService) {
    this.titleService.setTitle('Portfolio - Contact');
  };


  submitForm(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      this.errorMessage = '';
      this.formSubmittedSuccessfully = false;
      this.project.submitForm(form.value).subscribe(
        response => {
          this.loading = false;
          this.formSubmittedSuccessfully = true;
          form.resetForm();
          this.showForm = false;
          console.log('Success:', response);
        },
        error => {
          this.loading = false;
          this.showForm = false;
          this.errorMessage = 'Something went wrong. Please try again later.';
          console.error('Error!', error);
        }
      );
    }
  }

  contactAgain() {
    this.showForm = true;
    this.formSubmittedSuccessfully = false;
  }

  onPhoneKeyDown(event: KeyboardEvent) {
    // Allow only numbers and specific control keys
    if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || [8, 9, 13, 27, 37, 39].includes(event.keyCode))) {
      event.preventDefault();
    };
  };

  resetForm(formData: NgForm) {
    formData.resetForm(); // Reset the NgForm

    // Reset form fields individually
    formData.form.controls['name'].reset();
    formData.form.controls['email'].reset();
    formData.form.controls['phone'].reset();
    // Reset any other form fields you may have
    this.formSubmittedSuccessfully = false;
  };

}
