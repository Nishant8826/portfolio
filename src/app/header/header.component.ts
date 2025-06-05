import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  typingTexts: string[] = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'MEAN Stack Developer'
  ];
  currentText: string = '';
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const currentFullText = this.typingTexts[this.textIndex];

    if (this.isDeleting) {
      this.currentText = currentFullText.substring(0, this.charIndex--);
    } else {
      this.currentText = currentFullText.substring(0, this.charIndex++);
    }

    let typingSpeed = this.isDeleting ? 50 : 150;

    if (!this.isDeleting && this.charIndex === currentFullText.length) {
      this.isDeleting = true;
      typingSpeed = 500;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.typingTexts.length;
      typingSpeed = 500;
    }

    setTimeout(() => this.typeEffect(), typingSpeed);
  }

}
