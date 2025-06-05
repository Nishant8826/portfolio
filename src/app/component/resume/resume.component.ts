import { Component } from '@angular/core';
import { DomSanitizer, Title, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  pdfSrc: SafeResourceUrl;

  constructor(private titleService: Title, private sanitizer: DomSanitizer) {
    this.titleService.setTitle('Portfolio - Resume');
    const url = 'assets/Nishant-Rathore-SD2.pdf';
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  };

}
