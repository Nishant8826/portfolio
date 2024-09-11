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
  formData: any = {}; // Initialize formData
  formSubmittedSuccessfully: boolean = false;

  constructor(private titleService: Title, private project: ProjectsService) {
    this.titleService.setTitle('Portfolio - Contact');
  };

  submitForm(formData: NgForm) {
    console.log(formData.value); // Here you can process the form data as required
    this.project.saveFormData(formData.value).subscribe({
      next: (data) => {
        console.log('data::', data);
        this.resetForm(formData);
        this.formSubmittedSuccessfully = true;
        console.log('Form submitted successfully');
      }, error: (error) => {
        console.log('Error occured : ', error)
      }
    })

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
